const User = require("../model/user-model.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const registerUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    //check if user is already exists in a db
    const checkExistingUser = await User.findOne({
      $or: [{ username }, { email }],
    });
    if (checkExistingUser) {
      return res.status(400).json({
        success: false,
        mesage:
          "user already exists please try with other username or try different email",
      });
    }

    //hash password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create a new user and save in db

    const newlyCreatedUser = new User({
      username,
      email,
      password: hashedPassword,
      role: role || "user",
    });
    await newlyCreatedUser.save();

    if (newlyCreatedUser) {
      res.status(200).json({
        success: true,
        message: "User created successfully",
        data: newlyCreatedUser,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "Unable to create user, try again...",
      });
    }
  } catch (error) {
    console.log(error);

    res.status(501).json({
      success: false,
      message: "something went wrong",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    //cehck your exists or not
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({
        success: false,
        mesage: "Invalid credentials",
      });
    }

    //if the passoword is correcr or not

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(200).json({
        success: false,
        message: "password is not matching try again",
      });
    }

    //after password is being matched we can use json web tokend to store the user information

    const accessToken = jwt.sign(
      {
        userId: user?._id,
        username: user.username,
        role: user.role,
      },
      process.env.JWT_SCECRET_KEY,
      {
        expiresIn: "15m",
      }
    );
    res.status(200).json({
      success: true,
      message:"login successfull",
      accessToken
    })
  } catch (error) {
    console.log(error);

    res.status(501).json({
      success: false,
      message: "something went wrong",
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
