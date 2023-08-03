const Category = require('../../../../models/Category');
const Product = require('../../../../models/Product');


// getting all products 
module.exports.all = async function(req,res) {
    try {
        const products = await Product.find();
        if(products){
            return res.status(200).json({
                success : true,
                message : `${products.length} Products Found`,
                products
            });
        }
        return res.status(400).json({
            success : false,
            message : 'Something Went Wrong'
        });   
    } catch (error) {
        console.log('Error in getting Product',error);
        return res.status(500).json({
            success : false,
            message : 'Internal Server Error'
        });
    }
}

module.exports.add = async function(req,res){
     try {
        // checking category is valid or not
        const category = await Category.findById(req.body.category);
        if(category){
            const product = await Product.create({
                name : req.body.name,
                description : req.body.description,
                sku : req.body.sku,
                price : req.body.price,
                mrp : req.body.mrp,
                category : req.body.category,
                status : req.body.status,
            });
            if(product){
                return res.status(201).json({
                    success : true,
                    message : 'New Product Added'
                });
            }
            return res.status(400).json({
                success : false,
                message : 'Something Went Wrong'
            });

        }
        return res.status(400).json({
            success : false,
            message : 'Invalid Category'
        });
        
        
     } catch (error) {
        console.log('Error in Adding Product',error);
        return res.status(500).json({
            success : false,
            message : 'Internal Server Error'
        });
     }
}

module.exports.update = async function(req,res) {
    try {
        // checking Product exist or not
        const product = await Product.findByIdAndUpdate(req.params.id);

        if(product){
            // checking category id is valid or not
             const category = await Category.findById(req.body.category);
             if(category){
                // updating product
                product.name = req.body.name;
                product.description = req.body.description;
                product.sku  = req.body.sku;
                product.price = req.body.price;
                product.mrp = req.body.mrp;
                product.category = req.body.category;
                product.status = req.body.status;
                await product.save();

                return res.status(200).json({
                    success : true,
                    message : 'Product Updated Successfully'
                })
             }
             return res.status(400).json({
                success : false,
                message : 'Invalid Category'
             })

        }
        return res.status(400).json({
            success : false,
            message : 'Invalid Product!'
        });
        
    } catch (error) {
        console.log('Error in Updating Product',error);
        return res.status(500).json({
            success : false,
            message : 'Internal Server Error'
        });
    }
}



module.exports.delete = async function(req,res){
    try {
        const product = await Product.findById(req.params.id);
        if(product){
            await product.deleteOne();

            return res.status(200).json({
                success : true,
                message : 'Product Deleted Successfully',
            });
        }
        return res.status(402).json({
            success : false,
            message : 'Invalid Product!'
        });
        
    } catch (error) {
        console.log('Error in Deleting Product',error);
        return res.status(500).json({
            success : false,
            message : 'Internal Server Error',
        })
    }
}
