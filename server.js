const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const url = require("./config/db").uri;
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')


mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
 }
).then(()=> {
 console.log("Connection to DB established successfully");
}).catch(err => console.log(err));

app.use(cors());
app.listen(port, () => console.log("Backend server live on " + port));

// app.use('/api/forum', require('./routes/api/forumRoutes'));
