const express = require ('express');
const app = express();
const path = require('path');

//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', )



app.listen(app.get('port'), ()=>{
    console.log('server on port 3000');
});