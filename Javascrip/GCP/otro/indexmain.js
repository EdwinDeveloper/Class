const Order = require('../../models/order').model
const dish = require('../dishes')

// function get () {
//   return Order.find({}).exec()
// }

const get = () => Order.find({}).exec()

const create = (orderData) =>{

  const { dishes = [] }=orderData/*En caso que venga vacio le damos un valor por default [vacio] */

  const dishPromises = dishes.map((dishId)=>{/*Guardamos las promesas en una variable */
      return dish.getById(dishId);
  });/*Utilizamos un map para que nos regrese un nuevo arreglo con las promesas*/ 

  //const promise =new Promise();

  const dishPromisesResult = await Promise.all(dishPromises);/*Espera que se cumplan las promesas dentro de 
  dishPromises (colocanos el await para esperar las respuestas trues o falses)*/
  /*null==undefined  true*/
  /*null===undefined  false*/
  dishPromisesResult.reduce((reducer,currentValue, index)=>{

  },[]);/*Valor inicial es un arreglo vacio*/

  const newOrder = new Order(orderData);/*Creamos la instancia con la info del orden data */
  return newOrder.save(); //Retornamos lo que guardamos retorna una promesa por el save(no aplica exec)
}

module.exports = {
  get
}