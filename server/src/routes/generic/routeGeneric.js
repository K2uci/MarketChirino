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
<<<<<<< HEAD
const deleteOne = require('@utils/generic/deleteAllGeneric');

router.get('/loadAll', (req,res) => loadAll(req, res));
router.delete('/deleteOne', (req,res) => deleteOne(req, res));
=======

router.get('/loadAll', (req,res) => loadAll(req, res));

>>>>>>> 3cb35d372603af36a6c750cfc15a4ba89270dd69

module.exports = router;