var db = require('../models');

exports.getTutorials = function(req, res){
    db.Tutorial.find()
    .then(function(tutorials){
        res.json(tutorials);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.createTutorial = function(req, res){
  db.Tutorials.create(req.body)
  .then(function(newTutorial){
      res.status(201).json(newTutorial);
  })
  .catch(function(err){
      res.send(err);
  })
}

exports.getTutorial = function(req, res){
   db.Tutorial.findById(req.params.tutorialId)
   .then(function(foundTutorial){
       res.json(foundTutorial);
   })
   .catch(function(err){
       res.send(err);
   })
}

exports.updateTutorial =  function(req, res){
   db.Tutorial.findOneAndUpdate({_id: req.params.tutorialId}, req.body, {new: true})
   .then(function(todo){
       res.json(todo);
   })
   .catch(function(err){
       res.send(err);
   })
}

exports.deleteTodo = function(req, res){
   db.Tutorial.remove({_id: req.params.tutorialId}) 
   .then(function(){
       res.json({message: 'We deleted it!'});
   })
   .catch(function(err){
       res.send(err);
   })
}

module.exports = exports;