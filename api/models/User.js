/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  schema: true,

  attributes: {
      fname:{
          type:"string"
      },
      lname: {
          type:"string"
      },
      username: {
          type:"string",
          required:true,
          unique:true
      },
      email:{
          type:"string",
          email:true,
          required:true,
          unique:true
      },
      password: {
          type:"string",
          required:true
      }

      /*toJSON: function() {
          var obj = this.toObject();
          delete obj.password;
          delete obj.passwordVerification;
          delete obj._csrf;
          return obj;
      }*/
  }
};

