const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()

mongoose.connect(process.env.DATABASE_URL , {useNewUrlParser : true , useUnifiedTopology: true })
const db = mongoose.connection
db.on('error' , (err) => console.error(err))
db.once('open', ()=> console.log('connected'))
mongoose.set('useCreateIndex', true)

app.use(express.json())

const characterRouter = require('./routes/characters')
const potionRouter = require('./routes/potion')
const spellRouter = require('./routes/spell')

app.use('/potions', potionRouter)
app.use('/characters',characterRouter)
app.use('/spells',spellRouter)

app.listen(3000, ()=> console.log('server started'))
