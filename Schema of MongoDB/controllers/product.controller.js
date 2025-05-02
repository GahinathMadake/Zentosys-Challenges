const Product = require('../models/Product');
const User = require('../models/User');

const getVendorProducts = async (req, res) => {
    try {
      const { vendorId} = req.body;
  
      if (!vendorId) {
        return res.status(400).json({ 
          success: false, 
          message: 'Please provide vendorId' 
        });
      }
  
      let vendor;
      vendor = await User.findById(vendorId);
      
  
      if (!vendor) {
        return res.status(404).json({ 
          success: false, 
          message: 'Vendor not found' 
        });
      }
  
      const products = await Product.find({ vendorId: vendor._id })
        .populate('vendorId', 'name email');
  
      res.status(200).json({
        success: true,
        count: products.length,
        data: products
      });
  
    } catch (err){
      console.error(err);
      res.status(500).json({ 
        success: false, 
        message: 'Server Error' 
      });
    }
  }


  module.exports = {getVendorProducts};