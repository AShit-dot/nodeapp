const express = require('express')
const path = require('path') 
const app = express()
const mainRouter = require('./router/main')
const addRouter = require('./router/add')
const coursesRouter = require('./router/courses')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use('/', mainRouter)
app.use('/add', addRouter)
app.use('/courses', coursesRouter)



app.set('view engine', 'pug');



const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})