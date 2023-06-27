const mongoose = require('mongoose');

const orders = mongoose.Schema({
    user: {
        type: Number,
        required: true
      },
    state: Number,
    timestamp: {
        type: Date,
        default: Date.now
      }
});

const Orders = new mongoose.model('orders', orders); 

module.exports = Orders;