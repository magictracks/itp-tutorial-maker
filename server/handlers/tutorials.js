var db = require('../models');

// /api/users/:id/tutorials
exports.createTutorial = async function(req, res, next){
  try{
    // create a tutorial from the request
    // and post it to the db
    let tutorial = await db.Tutorial.create({
      name: req.body.name,
      repoName: req.body.name.replace(/[^0-9a-zA-Z]/g, '-'),
      createdBy: req.params.id,
      description: req.body.description,
      collaborators: req.body.collaborators,
      imageUrls: req.body.imageUrls ,
      user: req.params.id,
      sections: req.params.sections ,
      resources: req.params.resources
    })

    // find the user who created it and add it to their
    // list of tutorials
    let foundUser = await db.User.findById(req.params.id)
    foundUser.tutorials.push(tutorial.id)
    // save it
    await foundUser.save();

    // get the tutorial from the db, populate it with ONLY
    // the user info we want to publish publicly.
    let foundTutorial = await db.Tutorial.findById(tutorial._id).populate("user", {
      username: true,
      profileImageUrl: true
    })

    // return the found Tutorial
    return res.status(200).json(foundTutorial);

  } catch(err) {
    return next(err)
  }
}

/**
@ Get tutorial by id
@*/
// /api/users/:id/tutorials/:tutorial_id
exports.getTutorial = async function(req, res, next){
  try{

    let tutorial = await db.Tutorial.find(req.params.tutorial._id)

    return res.status(200).json(tutorial)
  } catch(err){
    return next(err)
  }
}

/**
@ Delete tutorial by id
@*/
// /api/users/:id/tutorials/:tutorial_id
exports.deleteTutorial = async function(req, res, next){
  try{

    let tutorial = await db.Tutorial.find(req.params.tutorial._id)
    await tutorial.remove();

    return res.status(200).json(tutorial)
  } catch(err){
    return next(err)
  }
}




// exports.getTutorials = function(req, res){
//     db.Tutorial.find()
//     .then(function(tutorials){
//         res.json(tutorials);
//     })
//     .catch(function(err){
//         res.send(err);
//     })
// }

// exports.createTutorial = function(req, res){
//   db.Tutorial.create(req.body)
//   .then(function(newTutorial){
//       res.status(201).json(newTutorial);
//   })
//   .catch(function(err){
//       res.send(err);
//   })
// }

// exports.getTutorial = function(req, res){
//    db.Tutorial.findById(req.params.tutorialId)
//    .then(function(foundTutorial){
//        res.json(foundTutorial);
//    })
//    .catch(function(err){
//        res.send(err);
//    })
// }

// exports.updateTutorial =  function(req, res){
//    db.Tutorial.findOneAndUpdate({_id: req.params.tutorialId}, req.body, {new: true})
//    .then(function(todo){
//        res.json(todo);
//    })
//    .catch(function(err){
//        res.send(err);
//    })
// }

// exports.deleteTodo = function(req, res){
//    db.Tutorial.remove({_id: req.params.tutorialId}) 
//    .then(function(){
//        res.json({message: 'We deleted it!'});
//    })
//    .catch(function(err){
//        res.send(err);
//    })
// }

module.exports = exports;