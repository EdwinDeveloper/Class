const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/kodemia');

const db=mongoose.connection;

db.on('open',()=>{
    console.log('connection open');
});
db.on('error',(error)=>{
    console.warn("Error on : "+error);
});