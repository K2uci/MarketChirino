const express = require('express'); 
const cors = require('cors'); 
require('module-alias/register'); 

const router = express.Router();
const bodyParser = require('body-parser');

// Parametros para cargar fotos grandes y evitar el CROSS
router.use(bodyParser.json({ limit: '50mb' }));
router.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
router.use(cors());
router.use(express.json());

// Utils para cargar fotos
const loadUpMens = require('@utils/mens/loadUpMens');
const loadDownMens = require('@utils/mens/loadDownMens');
const loadShoesMens = require('@utils/mens/loadShoesMens');


router.get('/up', (req,res) => loadUpMens(req, res));
router.get('/down', (req,res) => loadDownMens(req, res));
router.get('/shoes', (req,res) => loadShoesMens(req, res));

module.exports = router;