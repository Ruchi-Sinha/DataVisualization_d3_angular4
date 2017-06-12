const express = require("express");
const router = express.Router();
const Contact = require('../model/contact');

router.get('/reports',function(req, res){
  Contact.find({}).then(function(contacts){
    res.send(contacts);
    console.log('working reports'+contacts+"///");
  }).catch(function(error){
      console.log("Error: "+error);
  });
});

router.post('/reports',function(req, res){
  console.log("req body is:"+req.body);
  Contact.create(req.body).then(function(contacts){
    res.json(contacts);
  }).catch(function(error){
      console.log("Error: "+error);
  });
});

router.put('/reports/:id',function(req, res){
  console.log("I recieved a put request"+req.params.id);
  Contact.findOneAndUpdate({_id: req.params.id}, req.body).then(function(contacts){
    res.json(contacts);
  }).catch(function(error){
    console.log("Error:"+error); 
  });
});

router.delete('/reports/:id',function(req, res){
  console.log("I recieved a delete request////////////////////////////////////////#############################################");
  Contact.findOneAndRemove({_id: req.params.id}).then(function(contacts){
    res.json(contacts);
  }).catch(function(error){
    console.log("Error:"+error);
  });
});

module.exports = router;