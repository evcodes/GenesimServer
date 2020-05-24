const express = require('express');
const router = express.Router();

let FormResponse = require('../../models/formResponse.model');

// @route   GET api/forum
// @desc    Get All Posts
// @access  Public
router.get('/', (req, res) => {
    FormResponse.find()
      .then(responses => res.json(responses));
});

// @route   POST api/forum
// @desc    Create An Item
// @access  Public
router.post('/', (req, res) => {
    
    // make a new post with the form data submitted
    let formResponse = new Form({
        originCountry: req.body.originCountry,
        skinCol: req.body.skinCol,
        hairText: req.body.hariText,
        noseSize: req.body.noseSize,
        noseShape: req.body.noseShape,
        lipShape: req.body.lipShape,
        lipColor: req.body.lipColor,
        sex: req.body.sex
    });
    
    formResponse.save().then(item => res.json(item));
});

// @route   GET api/forum/postID
// @desc    Retrieve a post by ID
// @access  Public
// router.get('/:id', (req, res) => {
//     Post.findById({_id : req.params.id})
//     .then(postFound => {
//         if (!postFound){
//             return( res.status(404).end())
//         }
//         return (res.status(200).json(postFound));
//     })
// })

module.exports = router;