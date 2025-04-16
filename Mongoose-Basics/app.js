const mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose
  .connect(
    "mongodb+srv://anishsdmcbm:anishs22508@cluster0.25syez6.mongodb.net/"
  )
  .then(() => console.log("DB conected successfully"))
  .catch((err) => console.log(err));

const userSchema = new Schema(
  {
    name: String,
    email: String,
    age: Number,
    isActive: Boolean,
    tags: [String],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

async function runQuerriesExample() {
  try {
    const newUser = new User({
       name: "updated user",
       email: "updated@gmail.com",
       age: 22,
       isActive: "false",
       tags: ["tester", "tester"],
     });
     console.log(newUser);
     await newUser.save()
    /* const activeFalse = User.find({
      isActive: true,
     })
     console.log(activeFalse);
    
    await newUser.save() 
     console.log(newUser);  */
    //  const selectFeld = await User.find().select("name email -_id")
    //  console.log(selectFeld);

    /*const limitedUsers = await User.find().limit(5).skip(1);
    console.log(limitedUsers);*/

    //const sortedUser = await User.find().sort({age: 1}) //1 is asc and -1 is desc
    //console.log(sortedUser);

    const updatedUser = await User.findByIdAndUpdate(newUser._id, {
      $set: { age: 100 },
      $push: { tags: "updated" },
    }, { new: true });
    
    console.log(updatedUser);
    

   /*  const deleteUser = User.findByIdAndDelete(newUser._id)
    console.log(deleteUser); */
    
    const countDocument = await User.countDocuments({isActive:true})
    console.log(countDocument);
    
    
    
     
  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.connection.close();
  }
}

runQuerriesExample();
