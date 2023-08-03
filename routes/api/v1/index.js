
const express = require('express');


const router = express.Router();

const homeController = require('../../../controllers/api/v1/home_controller');


router.get('/',homeController.home);


router.use('/admin', require('./admin'));

module.exports = router;