const express = require('express');
const router = express.Router();

//import objets
const customerController = require('../controllers/customerController');

router.get('/', customerController.list);
router.post('/add', customerController.save);

module.exports = router;