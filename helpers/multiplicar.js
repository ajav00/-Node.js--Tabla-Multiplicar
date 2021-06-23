const fs = require('fs');
require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) =>{

    try{

        
        let salida = '';
        
        for(let i = 1; i<=hasta; i++){
            salida += `${ base } x  ${ i } = ${ i * base }\n`;
        }

        if(listar){
            console.log('================================'.green);
            console.log(`         Tabla del ${base}        `.blue);
            console.log('================================'.green);    
            console.log(salida.rainbow);
        }
    
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida)
        
        // console.log(`tabla-${ base }.txt creado`);
        return `tabla-${ base }.txt`;
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    crearArchivo
}