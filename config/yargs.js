const { number, options } = require('yargs');
const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla de multiplicar'
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: 'La base tiene que ser un número'
            })
            .option('h', {
                alias: 'hasta',
                type: 'number',
                default: 10, 
                describe: 'Es el límite de la tabla de multiplicar'
            })
            .check((argv, options)=>{
                if(isNaN(argv.b)){
                    throw 'La base tiene que ser un número'
                }
                if(isNaN(argv.l)){
                    throw 'El límite tiene que ser un número'
                }
                return true;
            })
            .argv;

module.exports = argv;