const express = require('express')
const router = express.Router()
const Potion = require('../models/potion')

//getting all
router.get('/' , async (req,res) => {
    try {
        const potions = await Potion.find()
        res.json(potions)
    } catch (err) {
        res.status(500).json({message : err.message})
    }
})

router.get('/:id' , getPotion, async (req,res) => {
    res.json(res.potion)
})

router.post('/' , async (req,res) => {
    const potion = new Potion({
        name : req.body.name,
        ingredients : req.body.ingredients,
        effect : req.body.effect,
        characteristics : req.body.characteristics,
        difficulty : req.body.difficulty
    })
    try {
        const newPotion = await potion.save()
        res.status(201).json(newPotion)
    } catch (err) {
        res.status(400).json({message : err.message})
    }
})

router.patch('/:id' ,getPotion, async (req,res) => {
    if(req.body.name != null){
        res.potion.name = req.body.name
    }
    if(req.body.ingredients != null){
        res.potion.ingredients = req.body.ingredients
    }
    if(req.body.effect != null){
        res.potion.effect = req.body.effect
    }
    if(req.body.characteristics != null){
        res.potion.characteristics = req.body.characteristics
    }
    if(req.body.diificulty != null){
        res.potion.diificulty = req.body.diificulty
    }
    try {
        const updatedPotion = await res.potion.save()
        res.json(updatedPotion)
    } catch (err) {
        res.status(400).json({message : err.message})
    }
})

router.delete('/:id' ,getPotion, async (req,res) => {
    try {
       await res.potion.remove()
       res.json({message : 'deleted potion'})
    } catch (err) {
        res.status(500).json({message : err.message})
    }
})

async function getPotion(req,res,next) {
    let potion
    try {
        potion = await Potion.findById(req.params.id)
        if (potion == null){
            return res.status(404).json({message : 'cannot find potion'})
        }
    } catch (err) {
        return res.status(500).json({message : err.message})
    }
    res.potion = potion
    next()
}

module.exports = router