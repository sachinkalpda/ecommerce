
const express = require('express');

const router = express.Router();

const productController = require('../../../../controllers/api/v1/admin/product_controller');

router.get('/all', productController.all);
router.post('/add', productController.add);

router.put('/edit/:id', productController.update);

router.delete('/delete/:id', productController.delete);
module.exports = router;