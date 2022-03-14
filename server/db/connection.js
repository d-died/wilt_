const mysql = require('mysql')
require('dotenv').config()

const { Sequelize } = require('@sequelize/core')
const sequelize = new Sequelize('wilt', process.env.DB_USERNAME, process.env.DB_ACCESS_KEY, { 
    host: process.env.DB_HOST,
    dialect: 'mysql',
    operatorsAliases: 0,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
})

// const db = mysql.createConnection({
//     host: 'process.env.DB_HOST',
//     user: 'process.env.DB_USERNAME',
//     password: 'process.env.DB_PASSWORD',
//     database: 'wilt'
// })

// const db = {}
// db.Sequelize = Sequelize
// db.sequelize = sequelize


// db.post = require('../models/Posts')(sequelize, Sequelize)
async () => await sequelize.sync()()
module.exports = { sequelize, Sequelize }

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: process.env.DB_ACCESS_KEY,
//     database: 'wilt'
// })

// db.connect((err) => {
//     if (!err) {
//         console.log('CONNECTED!!')
//     } else {
//         console.log('Connection Failed womp!')
//     }

    // let createPosts = CREATE TABLE if not exists `posts`(
    //     id int PRIMARY_KEY AUTO INCREMENT,
    //     title VARCHAR(150), 
    //     description VARCHAR(400),
    // )

    // db.query(createPosts, (err, res, fields) => {
    //     if (err) console.log(err.message)
    // })

    // db.end((err) => {
    //     if (err) return console.log(err.message)
    // })


// module.exports = db