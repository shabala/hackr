/**
* Comments.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    author:{
      type: 'string',
      required: true
    },
    body: {
    type: 'string',
      //required: true
  },
  upvotes:{
   type: 'number'
      //required: true 
}
  }
};
  
