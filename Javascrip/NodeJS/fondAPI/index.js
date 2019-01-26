const server = require('./src/server');//importamos el archivo db.js
const db = require('./src/lib/db');
//En index se deben iniciar las tareas primarias de la aplicacion
server.listen(8080,()=>{//metodo listen viene de express y lo traemos al exportarlo
    console.log("FondAPI running in port 8080");
    db.connect()
        .then(()=>{
            console.log("DB Connected");
        })
        .catch((error)=>{
            console.log("DB Error whilte connect"+error);
        })
});






