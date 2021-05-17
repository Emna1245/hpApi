const express = require('express')
const router = express.Router()
const Character = require('../models/character')

//getting all
router.get('/' , async (req,res) => {
    try {
        const characters = await Character.find()
        res.json(characters)
    } catch (err) {
        res.status(500).json({message : err.message})
    }
})

//getting one

router.get('/:id' , getCharacter, async (req,res) => {
    res.json(res.character)
})

// creating one
router.post('/' , async (req,res) => {
    const character = new Character({
        name : req.body.name,
        gender : req.body.gender,
        job : req.body.job,
        house : req.body.house,
        wand : req.body.wand,
        patronus : req.body.patronus,
        species : req.body.species,
        bloodStatus : req.body.bloodStatus,
        hairColour : req.body.hairColour,
        eyeColour : req.body.eyeColour,
        loyalty : req.body.loyalty,
        skills : req.body.skills,
        birth : req.body.birth,
        death : req.body.death,

    })

    try {
        const newCharacter = await character.save()
        res.status(201).json(newCharacter)
    } catch (err) {
        res.status(400).json({message : err.message})
    }
})

// updating one
router.patch('/:id' ,getCharacter, async (req,res) => {
    if(req.body.name != null){
        res.character.name = req.body.name
    }
    if(req.body.gender != null){
        res.character.gender = req.body.gender
    }
    if(req.body.house != null){
        res.character.house = req.body.house
    }
    if(req.body.job != null){
        res.character.job = req.body.job
    }
    if(req.body.wand != null){
        res.character.wand = req.body.wand
    }
    if(req.body.patronus != null){
        res.character.patronus = req.body.patronus
    }
    if(req.body.species != null){
        res.character.species = req.body.species
    }
    if(req.body.bloodStatus != null){
        res.character.bloodStatus = req.body.bloodStatus
    }
    if(req.body.hairColour != null){
        res.character.hairColour = req.body.hairColour
    }
    if(req.body.eyeColour != null){
        res.character.eyeColour = req.body.eyeColour
    }
    if(req.body.loyalty != null){
        res.character.loyalty = req.body.loyalty
    }
    if(req.body.skills != null){
        res.character.skills = req.body.skills
    }
    if(req.body.birth != null){
        res.character.birth = req.body.birth
    }
    if(req.body.death != null){
        res.character.death = req.body.death
    }
    try {
        const updatedCharacter = await res.character.save()
        res.json(updatedCharacter)
    } catch (err) {
        res.status(400).json({message : err.message})
    }
})

//deleting one
router.delete('/:id' ,getCharacter, async (req,res) => {
    try {
       await res.character.remove()
       res.json({message : 'deleted character'})
    } catch (err) {
        res.status(500).json({message : err.message})
    }
})

async function getCharacter(req,res,next) {
    let character
    try {
        character = await Character.findById(req.params.id)
        if (character == null){
            return res.status(404).json({message : 'cannot find character'})
        }
    } catch (err) {
        return res.status(500).json({message : err.message})
    }
    res.character = character
    next()
}

module.exports = router