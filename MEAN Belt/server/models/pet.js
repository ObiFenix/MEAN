var mongoose = require('mongoose');
validate = require('mongoose-validator');

var nameValidator = [
  // validate({
  //   validator: function(val) {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         Pet.count({name:val}, (err,data)=>{
  //         resolve(data == 0)
  //         })
  //       }, 500)
  //     })
  //   },
  //   message: 'This name already exists.',
  // }),
  validate({
    validator: 'isLength',
    arguments: [3, 50],
    message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters',
  })
]
var typeValidator = [
  validate({
    validator: 'isLength',
    arguments: [3, 50],
    message: 'Type should be between {ARGS[0]} and {ARGS[1]} characters',
  })
]
var descValidator = [
  validate({
    validator: 'isLength',
    arguments: [3, 50],
    message: 'Description should be between {ARGS[0]} and {ARGS[1]} characters',
  })
]


var PetsShema = new mongoose.Schema({
  name: {type: String, required:true, trim:true, validate: nameValidator},
  type: {type: String, required:true, trim:true, validate: typeValidator},
  desc: {type: String, required:true, trim:true, validate: descValidator},
  likes: {type: Number},
  skills: {type: [String], trim:true},
 },{timestamps: true})

var Pet = mongoose.model('Pet', PetsShema);
module.exports = Pet;

