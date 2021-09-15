const Joi = require('joi');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength:50,
        required: true
    },
    category: {
        type: String,
        minlength: 3,
        required: true,
        lowercase : true,
    },
    availableItems: {
        type: Number,
        required: true,
        min: 0,
    },
    price: {
        type: Number,
        min: 0,
        required: true,
    },
    manufacturer: String,
    imageUrl: String,
    description: String
  },
  {timestamps : true}
);

const Product = mongoose.model('Product', productSchema);

// Validation using Joi
function validateProduct(product){
    const schema = {
        name: Joi.string().min(3).max(50).required(),
        category: Joi.string().min(3).required(),
        availableItems: Joi.number().positive().required(),
        price: Joi.number().positive().required(),
        description: Joi.string(),
        manufacturer: Joi.string(),
        imageURL : Joi.string(),
    }
    return Joi.validate(product, schema);
};

exports.Product = Product; 
exports.validateProduct = validateProduct;
