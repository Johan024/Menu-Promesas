const mostrarMenu = () => {

    return new Promise( resolve => {
        console.log(`=============================`.yellow);
        console.log(`    Seleccione una opcion    `.yellow);
        console.log(`=============================\n`.yellow);
        console.log(`${'1.'.yellow} Crear nuevo producto`);
        console.log(`${'2.'.yellow} Listar Producto`);
        console.log(`${'3.'.yellow} Listar Clientes`);
        console.log(`${'4.'.yellow} Listar Pedidos`);
        console.log(`${'5.'.yellow} Enviar Pedidos`);
        console.log(`${'6.'.yellow} Borrar Pedido`);
        console.log(`${'0.'.yellow} Salir\n`);

        //Definimos la interfaz del teclado para que el usuario interactue
        const readLine = require('readline').createInterface({
            input: process.stdin, //Node espera lo que digita el usuario
            output: process.stdout //Node muestra en consola un mensaje
        });

        //Crear la interfaz definida
        readLine.question('Seleccione una opcion: ', (opt) => {
            readLine.close();
            resolve(opt);
        })
    })

};

const pausa = () => {

    return new Promise(resolve =>{

        //Definimos la interfaz del teclado para que el usuario interactue
        const readLine = require('readline').createInterface({
            input: process.stdin, //Node espera lo que digita el usuario
            output: process.stdout //Node muestra en consola un mensaje
        });

        //Crear la interfaz definida
        readLine.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opt) => {
            readLine.close();
            resolve();
        })

    })
};

module.exports = {
    mostrarMenu,
    pausa
}