const Product = require("../models/product.js")

const resolver = {
  Query: {
    products: async ()=> await Product.find({}),
    product:async (_, {id})=> await Product.findById(id),
  },
  Mutation:{
    createProduct: async (_, {input}) => {
      const newlyCreatedProduct = new Product(input)
      return await newlyCreatedProduct.save()
      
    },
     deleteProduct: async (_, { id }) => {
  return await Product.findByIdAndDelete(id) !== null;
},
  updateProduct:async (_, {id, input})=>{
     return await Product.findByIdAndUpdate(id, input, {new: true})
     
  }
  } 
};

module.exports = resolver