const product = require("../models/product.js");
const Product = require("../models/product.js")

const resolver = {
  Query: {
    products: async ()=> await Product.find({}),
    product:async (_, {id})=> await Product.findById(id),
  },
  Mutation:{
    createProduct: async (_, args) => {
      const newlyCreatedProduct = new Product(args)
      return await newlyCreatedProduct.save()
      
    },
     deleteProduct: async (_, { id }) => {
  return await Product.findByIdAndDelete(id) !== null;
},
  updateProduct:async (_, {id, ...updates})=>{
     return await Product.findByIdAndUpdate(id, updates, {new: true})
     
  }
  } 
};

module.exports = resolver