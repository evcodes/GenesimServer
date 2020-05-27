//Dependencies
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require('cors')

// Server configuration
const port = process.env.PORT || 5000;
const url = require("./config/db").uri;

//initialization
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());

//all requesets to /api/form route to the required param
app.use('/api/form', require('./routes/api/formResponse'))

//connect to MongoDB
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
 }
).then(()=> {
 console.log("Connection to DB established successfully");
}).catch(err => console.log(err));


app.listen(port, () => console.log("Backend server live on " + port));