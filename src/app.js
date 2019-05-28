const express = require ('express');
const morgan  = require('morgan');
const mysql = require('mysql');
const Myconnection = require('express-myconnection');
const path = require('path');

const app = express();

//importing routes
const customerRoutes = require('./routes/customer');
//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
    //put the views path
app.set('views', path.join(__dirname, 'views'))


//middlewares
app.use(morgan('dev'));
app.use(Myconnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3302,
    database: 'crudenodejsmysql'
}, 'single'))

app.use(express.urlencoded({extended:false}));

//routes (peticiones)
app.use('/', customerRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public')));


app.listen(app.get('port'), ()=>{
    console.log('server on port 3000');
});