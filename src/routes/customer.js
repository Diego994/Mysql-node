const express = require('express');
const router = express.Router();

//import objets
const customerController = require('../controllers/customerController');

router.get('/', customerController.list);

module.exports = router;