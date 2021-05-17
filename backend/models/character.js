const mongoose = require('mongoose')

const characterSchema = new mongoose.Schema({
    name :{
       type : String,
       required : true,
       unique : true
    },
    gender :{
        type : String,
       required : true
    },
    job : {
        type : String,
        default : 'Unknown'
    },
    house : {
        type : String,
        required : true,
        default : 'Unknown'
    },
    wand : {
        type : String,
        default : 'Unknown'
    },
    patronus : {
        type : String,
        default : 'Unknown'
    },
    species : {
        type : String,
        default : 'Unknown'
    },
    blooadStatus : {
        type : String,
        default : 'Unknown'
    },
    hairColour : {
        type : String,
        default : 'Unknown'
    },
    eyeColour : {
        type : String,
        default : 'Unknown'
    },
    loyalty : {
        type : [String],
        default : 'Unknown'
    },
    skills : {
        type : [String],
        default : 'Unknown'
    },
    birth : {
        type : String,
        default : 'Unknown'
    },
    death : {
        type : String,
        default : 'Unknown'
    }
})

module.exports = mongoose.model('Character', characterSchema)