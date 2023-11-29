const cartsController = require ('../carts/controller')
const productsController = require ('../products/controller')

const router = (app) => {

    app.use ('/carts', cartsController)

    app.use ('/products', productsController)

}

module.exports= router 