const express = require('express')
const router = express.Router()
const Spell = require('../models/spell')

router.get('/' , async (req,res) => {
    try {
        const spells = await Spell.find()
        res.status(200).json(spells)
    } catch (err) {
        res.status(500).json({message : err.message})
    }
})

router.get('/:id' , getSpell , async (req,res) => {
    res.json(res.spell)
})

router.patch('/:id' , getSpell, async (req,res) => {
    if(req.body.name != null){
        res.spell.name = req.body.name
    }
    if(req.body.incantation != null){
        res.spell.incantation = req.body.incantation
    }
    if(req.body.type != null){
        res.spell.type = req.body.type
    }
    if(req.body.effect != null){
        res.spell.effect = req.body.effect
    }
    if(req.body.light != null){
        res.spell.light = req.body.light
    }

    try {
        const updatedSpell = await res.spell.save()
        res.status(200).json(updatedSpell)
    } catch (err) {
        res.status(500).json({message : err.message})
    }
})

router.post('/' , async (req,res) => {
    const newSpell = new Spell({
        name : req.body.name,
        incantation : req.body.incantation,
        type : req.body.type,
        effect : req.body.effect,
        light : req.body.light
    })
    
    try {
        const spell = await newSpell.save()
        res.status(201).json(spell)
    } catch (err) {
        res.status(500).json({message : err.message})
    }
})

router.delete('/:id' ,getSpell , async (req,res) => {
    try {
        await res.spell.remove()
        res.status(200).json({message : 'Spell deleted'})
    } catch (err) {
        res.status(500).json({message : err.message})
    }
})

async function getSpell(req,res,next){
    let spell 
    try {
        spell = await Spell.findById(req.params.id)
        if(spell == null){
            res.status(404).json({message : 'Cannot find spell'})
        }
    } catch (err) {
        res.status(500).json({message : err.message})
    }
    res.spell = spell
    next()
}

module.exports = router