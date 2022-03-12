require('dotenv').config()
const db = require('../db/connection')

const sequelize = db.sequelize
const Sequelize = db.Sequelize



const Post = sequelize.define('post', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
    },
    title: Sequelize.STRING, 
    description: Sequelize.TEXT,
    upvotes: Sequelize.INTEGER,
    createdAt: { 
        type: Sequelize.DATE, 
        defaultValue: Sequelize.NOW
    },
    updatedAt: { 
        type: Sequelize.DATE, 
        defaultValue: Sequelize.NOW
    }
    })







module.exports = Post