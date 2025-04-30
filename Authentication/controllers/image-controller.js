const Image = require('../model/image-model.js')
const {uploadToCloudiary} = require("../helpers/cloudinaryHelper.js")
const fs = require('fs')
const { image } = require('../config/cloudinary.js')
const uploadImage = async(req, res)=>{
  try {
    //check if file is missing in req object
    if (!req.file) {
      return res.status(400).json({
        success:false,
        message:"File is required please upload an image"
      })
    }

    //upload to cloudinary
    const {url, publicId} = await uploadToCloudiary(req.file.path)

    //store the image url and publicId along with the uploaded user id in db

    const newlyUploadedImage = new Image({
      url,
      publicId,
      uploadedBy:req.userInfo.userId
    })
    await newlyUploadedImage.save()

    //delete the file from localstorage
    fs.unlinkSync(req.file.path)

    res.status(201).json({
      success: true,
      message:"Image uploaded successfully",
      image: newlyUploadedImage,
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success:false,
      message:"Something went wrong please try again"
    })
  }
}


const fetchImageController = async(req, res)=>{
  try {
    const images = await Image.find({})
    if(images){
      res.status(200).json({
        success: true,
        data: images
      })
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success:false,
      message:"Something went wrong please try again"
    })
  }
}
module.exports = {
  uploadImage,
  fetchImageController
}