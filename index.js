const express = require('express');
const app = express();
const mongoose = require('mongodb');
mongoose.connect('mongodb+srv://zonecreator:Mongodb@123456@shoping-itqad.mongodb.net/test?retryWrites=true&w=majority',
 {useNewUrlParser: true, useUnifiedTopology: true}).then(() =>console.log('DB connected'))
                         .catch(err => console.error(err));





app.get('/', (req,res)=> {
    res.send('Hello world')
});

app.listen(5000);