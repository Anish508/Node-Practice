const Image = require('../model/image-model.js')
const {uploadToCloudiary} = require("../helpers/cloudinaryHelper.js")
const fs = require('fs')
const cloudinary = require('../config/cloudinary.js')
const { totalmem } = require('os')
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
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 3;
    const skip = (page - 1) * limit;

    const sortBy = req.query.sortBy || 'createdAt';
    const sortOrder = req.query.sortOrder === 'asc' ? 1 : -1;
    const totalImages = await Image.countDocuments();
    const totalPages = Math.ceil(totalImages/ limit);

    const sortObj = {};
    sortObj[sortBy] = sortOrder;
    const images = await Image.find().sort(sortObj).skip(skip).limit(limit);
    if(images){
      res.status(200).json({
        success: true,
        currentPage : page,
        totalPages : totalPages,
        TotalImages : totalImages,
        data: images,

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

const deleteImageController = async(req, res)=>{
 /*  To delete image the user should be the uploader of that particular image otherwise he cant delete
 1.delete the images from cloudinary 
 2.delete the image from mongoDB
 */
try {
  const getCurrentImageIdToDeletete = req.params.id;
  console.log(getCurrentImageIdToDeletete);
  
  const userId = req.userInfo.userId;

  const image = await Image.findById(getCurrentImageIdToDeletete)

  if(!image){
    return res.status(404).json({
      success:false,
      message:"Image not found"
    })
  }

  //check if this image uploaded by current user
  if(image.uploadedBy.toString() !== userId){
    return res.status(400).json({
      success:false,
      message:"You are not authorized user"
    })
  }

  //delete image from cloudinary
 await cloudinary.uploader.destroy(image.publicId)
  
//now delete this image from mongoDB 
await Image.findByIdAndDelete(getCurrentImageIdToDeletete);

res.status(200).json({
  success:true,
  message:"Image delete successfully"
})
} catch (error) {
  console.log(error);
  res.status(500).json({
    success:false,
    message:"Something went wrong... try again!"
  })
  
}
}
module.exports = {
  uploadImage,
  fetchImageController,
  deleteImageController
}