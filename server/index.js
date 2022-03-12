const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.set('port', process.env.PORT || 8000 )


const db = require('./db/connection')
// db.sequelize.sync()

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'WILT'
// })


//==================================
//MIDDLEWARE
//==================================


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const requestLogger = require('./middleware/request_logger');
app.use(requestLogger);

//==================================
//ROUTES
//==================================

app.get('/', (req, res) => {res.redirect('/posts')})
// app.get('/posts', )

app.use('/posts', require('./controllers/PostController'))

// const postController = require('./controllers/PostController')
// app.use('/posts', postController)

//THIS CREATES A NEW TABLE IN SQL
// app.get('/posts', (req, res) => {
//     let posts = 'posts'
    
//     let query = `CREATE TABLE ${posts}
//     (id INT AUTO_INCREMENT PRIMARY KEY,
//     title VARCHAR(100),
//     description VARCHAR(400))`

//     db.query(query, (err, rows) => {
//         if (err) return res.status(500).send('table creation failed')

//         return res.send(`Successfully created table - ${posts}`)
//     })
// })


//==================================
//CONTROLLERS
//==================================

// const PostController = require('./controllers/PostController')
// app.get('/posts', PostController)

//==================================
//START SERVER
//==================================

app.use(( err, req, res, next ) => {
    const statusCode = res.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).send(message)
})

app.listen(8000, () => {
    console.log(`PORT: 8000 CNXN YAS!`)
})

