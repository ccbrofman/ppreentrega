const {Router} =  require ('express')
const router= Router ()
const productManager= require ('../Products/productManager')


// router.get ('/products', (req, res) => {
//     const { limit } = req.query
//     if (limit) {

//         const product = products.slice(0, limit || 5)
//         const product= productManager.getproducts(productManager)


//         return res.json({ message: products })
//     }


//     res.json({ message: ''})
// })
router.get('/:pid', (req, res) => {
    const { pid } = req.params;
    const product = productManager.getProductById(pid);

    if (product) {
        res.json({ message: product });
    } else {
        res.status(404).json({ message: `Product with ID ${pid} not found` });
    }
});

router.post ('/products', uploader.single ('file'), (req,res) => {

    const {title,price,category} =req.body
    // console.log (req.body)
    const user = req.body
    user.profile= req.file.path
    // console.log (JSON.parse (user))


    res.json({message: ` ${user}`})

})
router.put ('/:pid', (req, res) => {
    console.log (req.body)
    res.json({message: 'update product'})

})
router.delete ('/:pid', (req, res) => {
    res.json ({message: `delete product $ {req.params.pid} `})

})



module.exports = router
