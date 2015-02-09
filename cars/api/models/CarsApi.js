/**
* CarsApi.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
 
      carName:{
        type:"string",
        required:true
      },     
    carMfr:{
      type:"string",
      required:true
    },
    carImg:{
      type:"string",
      required:true
    
  },
    carDesc:{
      type: "string",
      required:true
    },
    rateUp: {
      type: "number",
      
  }
    
  }
};

