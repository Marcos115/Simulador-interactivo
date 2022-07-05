
do {
    producto1 = parseFloat(prompt("Ingrese el precio de un producto"))
    producto2 = parseFloat(prompt("Ingrese el precio del otro producto"))

    if (isNaN(producto1) || isNaN(producto2)) {
        alert("Porfavor ingresa numeros validos")
    }

    if (producto1 == 0 && producto2 == 0) {
        alert("No pueden valer 0")
    }

} while ((isNaN(producto1) || isNaN(producto2 == 0)))

class Recibo {
    constructor(producto1, producto2) {
        this.precioFinal = precioFinal
        this.producto1 = producto1
        this.producto2 = producto2
        12
    }mostrarMensaje(){
        alert(`Este es el costo de tu compra ${this.precioFinal(producto1,producto2)}`)
    }
}

this.precioFinal = (producto1, producto2) => producto1 + producto2

const costoCompra = new Recibo(producto1,producto2)

console.log()
costoCompra.mostrarMensaje()