const cloudinary = require('../config/cloudinary.js')

const uploadToCloudiary = async(filepath)=>{
  try {
    const result = await cloudinary.uploader.upload(filepath)

    return {
      url : result.secure_url,
      publicId : result.public_id,
    }
  } catch (error) {
    console.error("Error while uploading cloudinary",error);
    throw new Error('Error while uploading cloudinary')
  }
}

module.exports = {
  uploadToCloudiary
}