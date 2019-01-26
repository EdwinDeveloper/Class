const {Schema , model:Model} = require('mongoose');

const schema = new Schema({
    dishes:{
        type:[String],
        required:true,
    },
    name:{
        type:String,
        trim:true,
        maxlength:20,
        minlength:2,
        required:true
    },
    status:{
        type:String,
        required:true,
        enum:[
            'active',
            'send',
            'aproved',
            'prepare',
            'ready',
            'dispatched',
            'payed',
            'canceled'
        ]
    }
});

const model = Model(schema);

module.exports = {  schema , model  }