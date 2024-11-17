const express = require("express"); 
const cors = require('cors'); 
const morgan = require('morgan');

// Rutas para las categorias
const routeMen = require('./routes/mens/routeMen');
const routeWoman = require('./routes/womans/routeWoman');
const routeGeneric = require('./routes/generic/routeGeneric');

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Uso de las diferentes rutas
app.use('/mens', routeMen);
app.use('/womans', routeWoman);
app.use('/generic', routeGeneric);


module.exports = app;



