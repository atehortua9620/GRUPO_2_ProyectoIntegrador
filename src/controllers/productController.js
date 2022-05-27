const controller = {
    productDetail:(req,res)=>{
        res.render('./productDetail.ejs');
    },
    createEditProduct: (req,res)=>{
        res.render('./createEditProduct.ejs');
    }
}

module.exports = controller;