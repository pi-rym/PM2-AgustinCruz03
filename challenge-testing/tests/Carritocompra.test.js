const { CarritoCompra } = require("../index")
// constructor(): Inicializa el carrito como un array vacío.

// agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

// calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

// aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado


const mockAgregarProducto = CarritoCompra.prototype.agregarProducto
// console.log(mockAgregarProducto.mocks.call)
describe("la clase CarritoCompra debe...", () => {
    //acerca de constructor
    it("tener una clase constructor", () => {
        expect(typeof CarritoCompra.prototype.constructor).toEqual("function")
    });

    it("inicializar el carrito con un array vacío", () => {
        const carritoNuevo = new CarritoCompra()
        expect(carritoNuevo.products).toEqual([])
    });
    //funcion agregarProducto()
    it("tener una funcion agregarProducto()",() => {
        expect(mockAgregarProducto).toBeDefined();
    })

    it("recibir un objeto representando un producto y lo agrega al carrito con la funcion agregarProducto()", () => {
        const carritoNuevo = new CarritoCompra()
        carritoNuevo.agregarProducto({nameProducto:"yogur", precio:200})
        expect(typeof carritoNuevo.products[0]).toEqual("object")
    })

    it("solo poder recibir objetos para agregarlos al carrito", () => {
        const carritoNuevo = new CarritoCompra()
        expect(() => carritoNuevo.agregarProducto("hola")).toThrowError("no esta ingresando un objeto")
        expect(() => carritoNuevo.agregarProducto(9).toThrowError("no esta ingresando un objeto"))
    })

    //funcion calcularTotal()
    it("tener una funcion calcularTotal", () => {
        expect(CarritoCompra.prototype.calcularTotal).toBeDefined();
    })

    it("calcular el total de la compra sumando los precios del carrito, usando la funcion calcularTotal()", () => {
        const carritoNuevo = new CarritoCompra()
        carritoNuevo.agregarProducto({nameProducto:"yogur", precio:200})
        carritoNuevo.agregarProducto({nameProducto:"leche", precio:100})
        carritoNuevo.agregarProducto({nameProducto:"carne", precio:300})
        expect(carritoNuevo.calcularTotal()).toEqual(600);
    })

    //aplicarDescuento(Porcentje)
    it("aplicar un descuento al total de la compra, utilizando la funcion aplicarDescuento(porcentaje)", () => {
        const carritoNuevo = new CarritoCompra()
        carritoNuevo.agregarProducto({nameProducto:"yogur", precio:200})
        carritoNuevo.agregarProducto({nameProducto:"leche", precio:100})
        carritoNuevo.agregarProducto({nameProducto:"carne", precio:300})
        carritoNuevo.aplicarDescuento(10)
        expect(carritoNuevo.calcularTotal()).toEqual(540);
    })
})