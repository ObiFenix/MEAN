var Pet = require('../models/pet')

module.exports = {
  pet: function(req,res) {
    Pet.find({}, null, {sort:'type'}, function(err, pets){
      if(err){
        res.json({error: err})
      }
      else {
        res.json({message: "Success", pets: pets})
      }
   })
  },
  add: function(req,res) {
    let newPet = new Pet({name: req.body.name,type: req.body.type, desc: req.body.desc, skills:[req.body.skills[0],req.body.skills[1],req.body.skills[2]], likes: 0})
    newPet.save((err,data)=>{
      if(err){
        for(var key in err.errors){
          req.flash('registration', err.errors[key].message);
        }
        res.json({error: err})
      }
      else{
        res.json({message: "Success"})
      }
    })
  },
  delete: function(req,res) {
    Pet.findByIdAndRemove({_id:req.params.id},(err)=>{
      if(err){
        res.json({error: err})
      }
      else{
      res.json({message: "Deleted Record"})
      }
    })
  },
  getPet: function(req,res) {
    Pet.findById({_id:req.params.id},(err, product)=>{
      if(err){
        res.json({message: "Error", error: err})
      }
      else {
        res.json(product)
      }
   })
  },
  edit: function(req,res) {
    Pet.findById({_id:req.params.id},(err, pet)=>{

      if(err){
        res.json({error: err})
      }
      else {        
        pet.name = req.body.name;
        pet.type = req.body.type;
        pet.desc = req.body.desc;
        pet.set({skills: [req.body.skills[0],req.body.skills[1],req.body.skills[2]]})
        pet.save((err)=>{
          if(err){
            res.json({error: err})
          }
          else{
            res.json({_id: pet._id})
          }
        })
      }
   })
  }
}