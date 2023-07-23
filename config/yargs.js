

const argv = require('yargs')
                .option('b',{
                    alias:'base',
                    type: 'number',
                    demandOption:true,
                    describe:'Es la base de la tabla de multiplicar',        
                }) 
                .check((argv, options)=>{
                    if (isNaN(argv.b)) {
                        //controla el error con throw
                        throw 'la base tiene q ser un numero'
                    }
                    //si n hay ningun error ciemrpe retornar true
                    return true;
                })  
                .option('l',{
                    alias:'listar',
                    type:'boolean',
                    default:'false',
                    describe:'lita la tabla en consola'
                }) 
                .option('h',{
                    alias:'hasta',
                    type: 'number',
                    default:'10',
                    describe:'hasta donde se hara la multiplicacion de la tabla',        
                })     
                .argv;

module.exports = argv;