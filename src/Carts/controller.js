const fs = require('fs');

router.get('/:cid', (req, res) => {
    const cartId = req.params.cid;

    const cartData = fs.readFileSync('./data/cart.json', 'utf8');
    const carts = JSON.parse(cartData);
    const cart = carts.find(c => c.id === cartId);

    if (cart) {
        res.json(cart);
    } else {
        res.status(404).json({ message: `Cart with ID ${cartId} not found` });
    }
});

router.post('/:cid', (req, res) => {
    const cartId = req.params.cid;

    const newCart = {
        id: generateUniqueId(),
        products: []
    };

    const cartData = fs.readFileSync('./data/cart.json', 'utf8');
    const carts = JSON.parse(cartData);
    carts.push(newCart);
    fs.writeFileSync('./data/cart.json', JSON.stringify(carts));

    res.status(201).json(newCart);
});
router.post('/:cid/product/:pid', (req, res) => {
    const cartId = req.params.cid;
    const productId = req.params.pid;
    const quantity = req.body.quantity || 1; 


    const cartData = fs.readFileSync('./data/cart.json', 'utf8');
    const carts = JSON.parse(cartData);
    const cart = carts.find(c => c.id === cartId);

    if (cart) {

        const productData = fs.readFileSync('./data/products.json', 'utf8');
        const products = JSON.parse(productData);
        const product = products.find(p => p.id === productId);

        if (product) {

            const existingProduct = cart.products.find(p => p.id === productId);

            if (existingProduct) {

                existingProduct.quantity += quantity;
            } else {

                cart.products.push({ id: productId, quantity });
            }


            fs.writeFileSync('./data/cart.json', JSON.stringify(carts));

            res.status(201).json(cart);
        } else {
            res.status(404).json({ message: `Product with ID ${productId} not found` });
        }
    } else {
        res.status(404).json({ message: `Cart with ID ${cartId} not found` });
    }
});
