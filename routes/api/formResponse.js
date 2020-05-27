const express = require('express');
const router = express.Router();

let FormResponse = require('../../models/formResponse.model');

// @route   GET api/forum
// @desc    Get All Posts
// @access  Public
router.get('/', (req, res) => {
    console.log("Get request has reached the API")
    FormResponse.find()
      .then(responses => res.json(responses));
});

// @route   POST api/formResponse
// @desc    Create An Item
// @access  Public
router.post('/', (req, res) => {
    
    // make a new post with the form data submitted

    var responseInstance = new FormResponse ({
        originCountry: req.body.originCountry,
        skinCol: req.body.skinCol,
        hairText: req.body.hairText,
        noseSize: req.body.noseSize,
        noseShape: req.body.noseShape,
        lipShape: req.body.lipShape,
        lipColor: req.body.lipColor,
        sex: req.body.sex
    })
    
    responseInstance.save().then(response => {
        res.status(200).json({'response': response})
    }).catch(err => {
        res.status(400).send("adding new form response failed.");
    })
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