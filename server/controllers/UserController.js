const express = require('express')
const router = express.Router()
const db = require('../db/connection')
const User = require('../models/Users') 


//GET ALL
router.get('/', (req, res, next) => {
    console.log('hello world')
    User.findAll()
    .then(users => res.json(users))
    .catch(next)
    .catch(err => console.log(err))

})

//GET BY ID
router.get('/:id', (req, res) => {
    const id = req.params.id
    User.findAll({
        where: {
            id:  id 
        }
    })
        .then(user => res.json(user))
        .catch(err => console.log(err))
})

//CREATE A NEW USER
router.post('/', (req, res) => {
    User.create({
        email: req.body.email,
        password: req.body.password,
    })
        .then((user) => res.json(user))
        .catch(err => console.log(err, 'theres an error'))
})

module.exports = router