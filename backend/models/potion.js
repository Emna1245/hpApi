const mongoose = require('mongoose')

const potionSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true,
    },
    ingredients : {
        type : [String],
        required : true,
        default : 'Unknown'
    },
    effect : {
        type : String,
        required : true,
        default : 'Unknown'
    },
    characteristics : {
        type : String,
        required : true,
        default : 'Unknown'
    },
    difficulty : {
        type : String,
        required : true,
        unique : false,
        default : 'Unknown'
    }
})

module.exports = mongoose.model('Potion' , potionSchema)