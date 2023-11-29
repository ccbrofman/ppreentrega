class ProductManager {
    constructor() {
        this.products = [];
    }

    getProductById(id) {
        return this.products.find(product => product.id == id);
    }

    getProduct() {
        return this.products;
    }

    addProduct(title, description, code, price, status, stock, category) {
        if (!title || !description || !code || !price || !status || !stock || !category) {
            console.log('Los campos son obligatorios');
            return;
        }

        if (this.products.find(valorProducto => valorProducto.code == code)) {
            console.log('Su producto se encuentra repetido');
            return;
        }

        const newProduct = {
            id: this.products.length + 1, 
            title,
            description,
            code,
            price,
            status,
            stock,
            category,
        };

        this.products.push(newProduct);
    }

    updateProduct(id, newData) {
        const index = this.products.findIndex(product => product.id == id);

        if (index !== -1) {
            this.products[index] = { ...this.products[index], ...newData };
        }
    }

    deleteProduct(id) {
        this.products = this.products.filter(product => product.id != id);
    }
}

const productos = new ProductManager();


module.exports = productos;
