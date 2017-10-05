const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Story = mongoose.model('stories');
const User = mongoose.model('users');
const {ensureAuthenticated} = require('../helpers/auth');
const {ensureGuest} = require('../helpers/auth');


//Stories Index

router.get('/', (req, res) => {
  Story.find({status:'public'})
  .populate('user')
  .then(stories => {
    res.render('stories/index', {
      stories:stories
    });
  });
  
});

//Add Story Form
router.get('/add', ensureAuthenticated, (req, res) => {
  res.render('stories/add');
});

//Edit Story Form
router.get('/edit/:id', ensureAuthenticated, (req, res) => {
  Story.findOne({
    _id: req.params.id
  })
    .then(story => {
    res.render('stories/edit', {
      story: story
    });
  });
});

//Show single story
router.get('/show/:id', (req, res) => {
  Story.findOne({
    _id: req.params.id
  })
  .populate('user')
  .then(story => {
    res.render('stories/show', {
      story: story
    });
  });
});

//Proccess Add Story
router.post('/', (req, res) => {
  let allowComments;
  
  if(req.body.allowComments){
    allowComments = true;
  } else {
    allowComments = false;
  }
  
  const newStory = {
    title: req.body.title,
    body: req.body.body,
    status: req.body.status,
    allowComments: allowComments,
    user: req.user.id
  };
  //Create story
  new Story(newStory)
  .save()
  .then(story => {
    res.redirect(`/stories/show/${story.id}`)
  });
  
});

// Edit Form Process
router.put('/:id', (req, res) => {

  let allowComments;
 Story.findOne({
    _id: req.params.id
  })
    .then(story => {
    if(req.body.allowComments){
      allowComments = true;
    } else {
    allowComments = false;
    }
    // New Values
    story.title = req.body.title;
    story.body = req.body.body;
    story.status = req.body.status;
    story.allowComments = allowComments;
    
    story.save()
    .then(story => {
      res.redirect('/dashboard');
    });
  });
});

module.exports = router;