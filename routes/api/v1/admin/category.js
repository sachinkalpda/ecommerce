const express = require('express');

const router = express.Router();

const categoryController = require('../../../../controllers/api/v1/admin/category_controller');

// for getting all categories
router.get('/all',categoryController.all);

// for adding a new category
router.post('/add',categoryController.add);

// for edit the category
router.put('/edit/:id',categoryController.edit);

// for delete the category

router.delete('/delete', categoryController.delete);

module.exports = router;