class ProductManager {
    constructor() {
        this.products = [];
    };
    addProduct(title, description, price, thumbnail, code, stock){
        if (!title || !description || !price || !thumbnail || !code || !stock){
            console.log("Todos los campos deben ser completados")
            return
        };
        let productoExistente = this.products.find(producto=> producto.code === code);
        if (productoExistente){
            console.log(`El producto con el codigo ${code} ya existe.`);
            return;
        }
        let id = this.products.length + 1
        let newProduct ={
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        this.products.push(newProduct) 
    };
    getProducts(){
        return this.products
    };
    getProductsById(id){
        let producto = this.products.find(product => product.id === id);
        if (!producto) {
            console.log('not found');
            return;
        }
        return producto;
    }
};

const manager = new ProductManager();

manager.addProduct('Pan naan', '', 1500, '..img/panNan.img', 'pan01', 5 );
manager.addProduct('Pan frances', 'Rico pan de corteza crugiente relleno de queso', 500, '..img/panFrances.img', 'pan02', 5);
manager.addProduct('Pan chino', 'Rico pan de forma cuadrada con un suave toque dulce en su sabor, de corteza suave', 500, '..img/panChino.img', 'pan02', 10);
manager.addProduct('Pan galleta', 'Rico pan dulce con corteza de galleta en su parte superior, relleno de arequipe y queso', 3000, '..img/panGalleta', 'pan04', 2)
manager.addProduct('Pan hojaldrado', 'Rico Pan hecho a partir de masa de hojaldre, con el punto exacto de sal', 500, '..img/PanHojaldre.img', 'pan05', 15);
manager.addProduct('Pan pita', 'Rico pan de la india, generalmente usado para rellenar', 500, '..img/PanPita.img', 'pan06',30);
manager.addProduct('Pan de molde', 'Rico pan de molde tajado perfecto para acompañar con mantequilla', 1000, '..img/PanMolde.img', 'pan07',20);
manager.addProduct('Roscon', 'Rico pan en forma de anillo relleno de arequipo o bocadillo, espolvoreado con azucar', 800, '..img/Roscon.img', 'pan08', 4);
manager.addProduct('Pan Coco', 'Rico pan dulce relleno de bocadillo, con corteza espolvoreada de coco y azucar', 800, '..img/PanCoco.img', 'pan09', 12);
manager.addProduct('Pan oliva', 'Rico pan hecho a vace de aceite de oliva y harina de cereales', 1200, '..img/PanOliva.img', 'pan10', 5);
manager.addProduct('Pan rollito', 'Rico pan de masa suave horneado en forma de rollo', 500, '', 'pan11', 20);
manager.addProduct('Pan leche', 'Rico pan a base de leche con un agradable sabor dulce', 1000, '..img/PanLeche.img', 'pan12', 20)

/* 
rollito
oliva
coco
roscon
pan de molde
*/


console.log(manager.getProducts());
console.log(manager.getProductsById(3));
console.log(manager.getProductsById(10));
console.log(manager.getProductsById(8));
console.table(manager.products, manager.title)

