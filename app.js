const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
require('colors');

console.clear();

// console.log(argv);

// console.log('base: yargs ', argv.base);

crearArchivo(argv.b, argv.l, argv.h)
        .then(nombreArchivo => console.log(nombreArchivo, 'creado'.yellow))
        .catch(err => console.log(err))


// console.log(process.argv);
// const [ , , arg = 'base=5'] = process.argv;
// const [, base = 5] = arg.split("=");