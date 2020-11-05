const express = require('express');
const morgan = require('morgan');
const { proppatch } = require('./routes/employees.routes');

const app = express();

app.set('port',process.env.PORT || 3000)

app.use(morgan('dev'));
app.use(express.json());// objetos JSON que lleguen desde un content-type
app.use(express.urlencoded({extended:false})) // para entender datos que vengan desde un formulario

app.use('/api/employees',require('./routes/employees.routes'));

module.exports = app;