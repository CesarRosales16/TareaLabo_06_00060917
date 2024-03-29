productos = [];
ventas = [];
function menu() {
    let opcion = 0;
    while (opcion != 6) {
        opcion = prompt("\n----- MENU -----\n"
            + "1. Agregar producto\n"
            + "2. Modificar Stock\n"
            + "3. Registrar venta y reducir stock\n"
            + "4. Mostrar promedio de ventas realizadas\n"
            + "5. Mostrar productos con stock 0\n"
            + "6. Salir del sistema\n"
            + "¿Qué opcion desea? ");
        console.log(opcion);
        switch (opcion) {
            case '1':
                agregarProducto();
                break;
            case '2':
                modificarStock();
                break;
            case '3':
                registrarVenta();
                break;
            case '4':
                promedioVentas();
                break;
            case '5':
                productosAgotados();
                break;
        }
    }
}

var crearProducto = function (codigo, descripcion, tipo, precioCompra, precioVenta, stock) {
    return {
        Codigo: codigo,
        Descripcion: descripcion,
        Tipo: tipo,
        PrecioCompra: precioCompra,
        PrecioVenta: precioVenta,
        Stock: stock,
    }
}

var agregarProducto = function () {
    let found = false;
    let codigo = prompt("--AGREGAR PRODUCTO--\nIngrese el código del producto: ");
    productos.forEach(element => {
        if (element.Codigo == codigo) {
            console.log("Ya existe un producto con codigo: " + codigo);
            found = true;
        }
    });
    if (found == false) {
        let descripcion = prompt("--AGREGAR PRODUCTO--\nIngrese la descripción del producto: ");
        let tipo = prompt("--AGREGAR PRODUCTO--\nIngrese el tipo del producto: ");
        let precioCompra = Number(prompt("--AGREGAR PRODUCTO--\nIngrese el precio de compra del producto: "));
        let precioVenta = Number(prompt("--AGREGAR PRODUCTO--\nIngrese el precio de venta del producto: "));
        let stock = Number(prompt("--AGREGAR PRODUCTO--\nIngrese la cantidad del producto: "));
        let producto = crearProducto(codigo, descripcion, tipo, precioCompra, precioVenta, stock);
        productos.push(producto);
        console.log("Producto agregado exitosamente");
    }
}

var modificarStock = function () {
    if (productos.length != 0) {
        let codigo = prompt("--MODIFICAR STOCK--\nIngrese el código del producto a modificar el stock: ");
        productos.forEach(element => {
            if (element.Codigo == codigo) {
                let stock = Number(prompt("--MODIFICAR STOCK--\nIngrese la nueva cantidad del producto: "));
                element.Stock = stock;
                console.log("Stock del producto modificado correctamente");
            }
        });
    }
    else {
        console.log("No hay productos registrados");
    }
}

var registrarVenta = function () {
    if (productos.length != 0) {
        let codigo = prompt("--REGISTRAR VENTA--\nIngrese el código del producto vendido: ");
        productos.forEach(element => {
            if (element.Codigo == codigo) {
                let cantidad = Number(prompt("--REGISTRAR VENTA--\nIngrese la cantidad de producto vendido: "));
                if (cantidad > element.Stock) {
                    console.log("Solo se pudieron vender " + element.Stock + " elementos porque no hay mas en stock");
                    cantidad = element.Stock;
                }
                ventas.push({ Codigo: codigo, Cantidad: cantidad, PrecioUnitario: element.PrecioVenta });
                element.Stock = element.Stock - cantidad;
            }
        });
    }
    else {
        console.log("No hay productos registrados");
    }
}

var promedioVentas = function () {
    let sum = 0;
    ventas.forEach(element => {
        sum += ((element.PrecioUnitario) * (element.Cantidad));
    });
    if (ventas.length == 0) {
        console.log("El promedio de ventas es: 0");
    }
    else {
        console.log("El promedio de ventas es: " + (sum / ventas.length));
    }
}

var productosAgotados = function () {
    let cont = 0;
    productos.forEach(element => {
        if (element.Stock == 0) {
            console.log(element);
            cont++;
        }
    });
    if (cont == 0) {
        console.log("No hay productos con stock 0");
    }
}
var iniciarPrograma = function () {
    menu();
    console.log(productos);
    console.log(ventas);
}