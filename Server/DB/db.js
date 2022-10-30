// const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost:27017/shopping' , {useNewUrlParser:true ,  useUnifiedTopology:true})


// const db = mongoose.connection


// db.on("error" ,  console.error.bind(console ,  "Connection Error") );
// db.once("open" ,  function(){
//     console.log("Sucessfully connected with Mongo")
// })

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/shopping' , {useNewUrlParser:true ,  useUnifiedTopology:true})


const db = mongoose.connection


db.on("error" ,  console.error.bind(console ,  "Connection Error") );
db.once("open" ,  function(){
    console.log("Sucessfully connected with Mongo")
})