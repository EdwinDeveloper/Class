const { Schema , model:Model } = require('mongoose');

const schema=new Schema({
    name:{
        required:true,
        type:String,
        trim:true,
        maxlength:20,
        minlength:1
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    description:{
        type:String,
        required:true,
        maxlength:140
    }
});

const model = Model(schema);

module.exports = { model , schema }