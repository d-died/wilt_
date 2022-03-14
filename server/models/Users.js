require('dotenv').config()
const db = require('../db/connection')

const sequelize = db.sequelize
const Sequelize = db.Sequelize

const User = sequelize.define('user', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
    },
    email: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING
    },
    createdAt: { 
        type: Sequelize.DATE, 
        defaultValue: Sequelize.NOW
    },
    updatedAt: { 
        type: Sequelize.DATE, 
        defaultValue: Sequelize.NOW
    }
    })


module.exports = User