const Product = require("../models/product-model.js");

const getProductAnalysis = async (req, res) => {
  try {
    const result = await Product.aggregate([
      {
        $match: {
          category: "Electronics",
        },
      },
      {
        $group: {
          _id: null,
          totalRevenue: {
            $sum: "$price",
          },
          average_price: {
            $avg: "$price",
          },
          max_price: {
            $max: "$price",
          },
          min_price: {
            $min: "$price",
          },
        },
      },
      {
         $project: {
          _id: 0,
          totalRevenue: 1,
          average_price: 1,
          max_price: 1,
          min_price: 1,
          priceRange: {
            $subtract: ["$max_price", "$min_price"],
          },
        },
      }
    ]);
    res.status(200).json({
      success: true,
      message: "Message filtered successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Cannot insert something went wrong!",
    });
  }
};

const getProductStats = async (req, res) => {
  try {
    const result = await Product.aggregate([
      //stage 1
      {
        $match: {
          instock: true,
          price: {
            $gte: 600,
          },
        },
      },
      //stage:2
      {
        $group: {
          _id: "$category",
          avgPrice: {
            $avg: "$price",
          },
          count: {
            $sum: 1,
          },
        },
      },
    ]);

    res.status(200).json({
      success: true,
      message: "Message filtered successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Cannot insert something went wrong!",
    });
  }
};
const insertSampleProducts = async (req, res) => {
  try {
    const sampleProducts = [
      {
        name: "Sneakers",
        category: "Footwear",
        price: 3299,
        instock: false,
        tags: ["shoes", "sports", "fashion"],
      },
      {
        name: "Electric Kettle",
        category: "Kitchen",
        price: 1099,
        instock: true,
        tags: ["appliance", "boil", "water"],
      },
      {
        name: "LED Bulb Pack",
        category: "Home",
        price: 599,
        instock: true,
        tags: ["light", "energy-saving", "pack"],
      },
      {
        name: "Smart Watch",
        category: "Wearables",
        price: 4599,
        instock: false,
        tags: ["fitness", "notifications", "bluetooth"],
      },
      {
        name: "Water Bottle",
        category: "Fitness",
        price: 299,
        instock: true,
        tags: ["hydration", "bpa-free", "sports"],
      },
      {
        name: "Wireless Mouse",
        category: "Electronics",
        price: 899,
        instock: true,
        tags: ["wireless", "accessory", "usb"],
      },
      {
        name: "Yoga Mat",
        category: "Fitness",
        price: 499,
        instock: true,
        tags: ["exercise", "health", "stretch"],
      },
      {
        name: "Bluetooth Speaker",
        category: "Electronics",
        price: 1499,
        instock: false,
        tags: ["audio", "portable", "music"],
      },
      {
        name: "Notebook Set",
        category: "Stationery",
        price: 299,
        instock: true,
        tags: ["paper", "writing", "office"],
      },
      {
        name: "Gaming Keyboard",
        category: "Electronics",
        price: 2199,
        instock: true,
        tags: ["keyboard", "gaming", "rgb"],
      },
    ];

    const result = await Product.insertMany(sampleProducts);
    res.status(200).json({
      success: true,
      data: `Inserted ${result.length} sample producrs `,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Cannot insert something went wrong!",
    });
  }
};

module.exports = {
  insertSampleProducts,
  getProductStats,
  getProductAnalysis,
};
