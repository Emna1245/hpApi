const mongoose = require('mongoose')

const spellSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    incantation : {
        type : String,
        required : true,
    },
    type : {
        type : String,
        default : 'Unknown'
    },
    effect : {
        type : String,
        default : 'Unknown'
    },
    light : {
        type : String,
        default : 'Unknown'
    }
})

module.exports = mongoose.model('Spell',spellSchema)