const mongoose = require('mongoose');

const albums = mongoose.Schema({
    name_album: String,
    user_property: Number,
    images: []  
});

const Albums = new mongoose.model('albums', albums); 

module.exports = Albums;