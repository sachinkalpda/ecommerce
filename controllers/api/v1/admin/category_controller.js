const Category = require('../../../../models/Category');

module.exports.all = async function(req, res) {
    try {
        const categories = await Category.find();
        if(categories){
            return res.status(200).json({
                success : true,
                message : `${categories.length} Categories Found`,
                categories,
            });
        }
        return res.status(403).json({
            success : false,
            message : 'Something Went Wrong'

        })
        
    } catch (error) {
        console.log('Error in Category All',error);
        return res.status(500).json({
            success : false,
            message : 'Internal Server Error',
        });
    }
}

module.exports.add = async function(req,res) {
    try {
        const category = await Category.create({
            name : req.body.name,
            slug : req.body.slug,
            status : req.body.status,
        });
        if(category){
            return res.status(201).json({
                success : true,
                message : 'New Category Added!'
            });
        }
        return res.status(403).json({
            success : false,
            message : 'Something Went Wrong',
        })
        
    } catch (error) {
        console.log('Error in Adding Category',error);
        return res.status(500).json({
            success : false,
            message : 'Internal Server Error',
        });
    }
}

module.exports.edit = async function (req,res) {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id);
        if(category){
            category.name = req.body.name,
            category.slug = req.body.slug,
            category.status = req.body.status

            await category.save();
            return res.status(201).json({
                success : true,
                message : 'Category Updated Successfully'
            })

        }
        return res.status(403).json({
            success : false,
            message : 'Invalid Category',
        })
        
    } catch (error) {
        console.log('Error in Edit Category',error);
        return res.status(500).json({
            success : false,
            message : 'Internal Server Error',
        })
    }
}

module.exports.delete = async function(req,res){
    try {
        const category = await Category.findById(req.body.category);
        if(category){
            await category.deleteOne();

            return res.status(200).json({
                success : true,
                message : 'Category Deleted Successfully',
            });
        }
        return res.status(402).json({
            success : false,
            message : 'Invalid Category!'
        });
        
    } catch (error) {
        console.log('Error in Deleting Category',error);
        return res.status(500).json({
            success : false,
            message : 'Internal Server Error',
        })
    }
}
