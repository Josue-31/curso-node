const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors');
//primera forma de resolver con promesas
// const crearArchivo = (base = 5) => {
//     return new Promise((resolve, reject) => {
//         console.log('=================================');
//         console.log('           TABLA DEL', base);
//         console.log('=================================');

//         let salida = '';
//         for (let i = 1; i <= 10; i++) {

//             salida += (`${base} x ${i} = ${base * i}\n`);

//         }
//         console.log(salida);

//         fs.writeFileSync(`tabla-${base}.txt`, salida);
//         resolve(`tabla-${base}.txt`);
//     })

// }

// segunda formna re resolver con un funcion asincrona
const crearArchivo = async (base = 5, listar, hasta=10) => {

    try {
        let salida = '';
        let consola = '';
        for (let i = 1; i <= hasta; i++) {

            salida += (`${base} x ${i} = ${base * i}\n`);
            consola += (`${base} ${'x'.america} ${i} ${'='.green} ${base * i}\n`);
        }
        if (listar === true) {
            console.log('================================='.green);
            console.log('           TABLA DEL'.green, colors.blue(base));
            console.log('=================================');
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (err) {
        //ese throw es para manejar los errores
        throw err;
    }

}

module.exports = {
    crearArchivo
} 