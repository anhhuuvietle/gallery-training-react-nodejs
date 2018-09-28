const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const Images = new Schema({
    link: {
    	type: String,
    	require: true,
    }
});

module.exports = mongoose.model('Images', Images);
