const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let FormResponse = new Schema({
    originCountry: {
        type: String
    },
    skinCol: {
        type: String
    },
    hairText:{
        type:String
    },
    noseSize:{
        type:String
    },
    noseShape:{
        type:String
    },
    lipShape:{
        type:String
    },
    lipColor:{
        type:String
    },
    sex:{
        type:String
    }
});

module.exports = mongoose.model('FormResponse', FormResponse);