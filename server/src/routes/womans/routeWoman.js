const express = require('express'); 
const cors = require('cors'); 
require('module-alias/register'); 

const router = express.Router();
const bodyParser = require('body-parser');



router.use(bodyParser.json({ limit: '50mb' }));
router.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
router.use(cors());
router.use(express.json());

const loadUpMens = require('@utils/mens/loadUpMens');

router.get('/mens', (req,res) => loadUpMens(req, res));

module.exports = router;