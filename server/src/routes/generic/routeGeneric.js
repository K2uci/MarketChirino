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
const loadAll = require('@utils/generic/loadAllGeneric');
const deleteOne = require('@utils/generic/deleteAllGeneric');
const createOne = require('@utils/generic/createAllGeneric');
const editOne = require('@utils/generic/editAllGeneric');

router.get('/loadAll', (req,res) => loadAll(req, res));
router.delete('/deleteOne/:id', (req,res) => deleteOne(req, res));
router.post('/createOne', (req,res) => createOne(req, res));
router.put('/editOne/:id', (req,res) => editOne(req, res));

module.exports = router;