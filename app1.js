class Articulo {
    constructor(nombre, precio, stock) {
        this._nombre = nombre
        this._precio = precio
        this._stock = stock
    }
    comprar(cantidad) {
        if (cantidad > 0 && this._stock > 0 && this._stock - cantidad >= 0) {
            this._stock -= cantidad
            let total = cantidad + this._precio

            if (cantidad > 1) {
                console.log(`Usted ha comprado ${cantidad} unidades del producto ${this._nombre} - total: $${total}.`)
            } else {
                console.log(`Usted ha comprado ${cantidad} unidad del producto ${this._nombre} - total: $${total}.`)
            }
        }
        else if(this._stock <=0){
            console.log(`El producto ${this._nombre} actualmente esta agotado`)
        }else if(this._stock - cantidad <0){
            console.log(`La cantidad que quiere comprar es demaciada, actualmente solo hay ${this._stock} unidades del producto ${this._nombre},`)
        }else {
            console.log(`la cantidad del producto a comprar debe ser mayor a 0.`)
        }
    }
    reabastecer(cantidad){
        if(cantidad > 0){
            this._stock +=cantidad
            console.log(`Reabasteciendo el stock - cantidad disponible del producto ${this._nombre} = ${this._stock}.`)
        }else{
            console.log(`la cantidad que desea rebastecer debe ser mayor a 0.`)
        }
    }
}

const art = new Articulo(`Jabon`, 20, 10);
art.comprar(11);
art.comprar(1)

art.reabastecer(20)
art.comprar(15)