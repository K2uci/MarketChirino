const express = require("express"); 
const cors = require('cors'); 
const morgan = require('morgan');

// Rutas para las categorias
const routeMen = require('./routes/mens/routeMen');
const routeWoman = require('./routes/womans/routeWoman');
const routeGeneric = require('./routes/generic/routeGeneric');

const app = express();

// Uso de las diferentes rutas
app.use('/mens', routeMen);
app.use('/womans', routeWoman);
app.use('/generic', routeGeneric);

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


module.exports = app;



