
const express = require('express')
const router = express.Router()
const db = require('../db/connection')
const Posts = require('../models/Posts')



router.get('/', (req, res, next) => {
    console.log('hello world')
    Posts.findAll()
    .then(posts => res.json(posts))
    .catch(next)
    .catch(err => console.log(err))

})

//GET ONE SINGLE
router.get('/:id', (req, res) => {

    const id = req.params.id
    Posts.findAll({
        where: {
            id:  id 
        }
    })
        .then(post => res.json(post))
        .catch(err => console.log(err))

})

//CREATE/POST posts
router.post('/', (req, res) => {

    Posts.create({
        title: req.body.title,
        description: req.body.description,
        upvotes: req.body.upvotes
    })
        .then((post) => res.json(post))
        .catch(err => console.log(err, 'theres an error'))

})


//DELETE/DESTROY post
router.delete('/:id', ( req, res ) => {

    const id = req.params.id
    Posts.destroy({
        where: {
            id: id
        }
    })
    .then((posts) => res.json(posts))
    .then(err => console.log(err))

})


//UPDATE post -- not working yet
router.put('/:id', (req, res) => {

    const id = req.params.id
    // const postData = req.body
    // console.log(postData)
    Posts.update( { 
        title: req.body.title, 
        description: req.body.description,
        upvotes: req.body.upvotes
     } , { where: { id: id }})
    // .then((post) => res.json(post))
    // .then((post) => console.log(post))
    .then(() => { res.redirect('/posts') })
    .then(err => console.log(err))
})



module.exports = router