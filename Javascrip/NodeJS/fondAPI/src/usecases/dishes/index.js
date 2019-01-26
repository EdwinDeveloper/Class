const Dish = require('../../models/dish').model;

async function get(){
    const allDishes = await Dish.find({}).exec();//metodo exec lo ejecuta

    return allDishes;
    //return Dish.find({}).exec();
}

