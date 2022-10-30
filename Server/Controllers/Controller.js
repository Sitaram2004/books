// const userModel   =  require('../Models/Users')
// const products =  require('../Models/Products')

// const bcrypt = require('bcrypt')



// exports.testApi =  (req,res) =>{
//     res.status(401).send("<h1>I have changed the method</h1>")

// }


// exports.register = (req,res) =>{
//     res.send(`
//     <html>
//     <body>
//     <form  method='POST' action='/user/get_data' >
//     <div class="form-group">
//     <label for="exampleInputName">Name</label>
//     <input type="text"  name="name" class="form-control" id="exampleInputName"  placeholder="Enter Name">
//   </div>
//   <div class="form-group">
//     <label for="exampleInputEmail1">Email address</label>
//     <input type="email"  name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
//   </div>
//   <div class="form-group">
//     <label for="exampleInputPassword1">Password</label>
//     <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
//   </div>
//   <button type="submit" class="btn btn-primary">Submit</button>
// </form>
//     </body>
//     </html>
//     `)
// }

// exports.getRegData =  (req,res) =>{

//     // console.log(req.body)
//     // res.status(200).send(req.body)
  

//     // Direct Method Mongoose

//     // const users  =  new userModel(req.body)

//     //     users.save().then((result)=>{
          
//     //             res.status(200).send("User Registered Successfully")


//     //     }).catch((err)=>{


//     //         res.status(400).send(err)

//     //     })



//     // method : with Query
//      // npm install bcrypt

//     bcrypt.genSalt(10 ,  (err, salt)=>{
//       if(err) { res.status(403).send("Something went wrong in salt generation") }
//       else
//       {
//         bcrypt.hash(req.body.password ,  salt ,  (err ,  hash)=>{
//           if(err) { res.status(403).send("Something went wrong ") }
//           else
//           {
//             userModel.insertMany({name : req.body.name ,  email : req.body.email  ,  password : hash  }).then((result)=>{
//               res.status(200).send("User Registerd Sucessfully")
//             }).catch((err)=>{
//               res.status(403).send("Somethig went wrong")
        
//             })
//           }
          
//         })
//       }
//     })
// }


// exports.userLogin  = (req,res)=>{

//   userModel.find({"email" : req.body.email}).then((result)=>{

//     if(result.length === 0)
//     {
//       res.status(403).send("User Not Found")
//     }
//     else
//     {
//       bcrypt.compare(req.body.password ,  result[0].password , (err , status  )=>{
//         if(err)
//         {
//           res.status(403).send("Something went Wrong")
//         }
//         else{
//           if(status  === true)
//           {
//             res.status(200).send({msg : "User Login Sucessfully" ,  id : result[0]._id})
//           }
//           else{
//             res.status(200).send({msg : "Incorrect Password"})

//           }
//         }
//       })
//     }

//   }).catch((err)=>{

//     res.status(403).send("Somethig went wrong")

//   })

// }



// exports.addProduct =  (req,res) =>{

//   products.insertMany({
//     p_name : req.body.p_name , 
//     p_price : req.body.p_price,
//     p_desc  : req.body.p_desc,
//     p_image : req.body.p_image,
//     p_cat : req.body.p_cat,
//     avl_quantity : req.body.avl_quantity
//    }).then((result)=>{
//     console.log(result)

//     res.status(200).send({msg : "Product Added Successfully"})

//    }).catch((err)=>{
//     console.log(err)

//     res.status(400).send("Something Went Wrong")
//    })
   

   

// }


const userModel   =  require('../Models/Users')
const products =  require('../Models/Products')

const bcrypt = require('bcrypt')



exports.testApi =  (req,res) =>{
    res.status(401).send("<h1>I have changed the method</h1>")

}


exports.register = (req,res) =>{
    res.send(`
    <html>
    <body>
    <form  method='POST' action='/user/get_data' >
    <div class="form-group">
    <label for="exampleInputName">Name</label>
    <input type="text"  name="name" class="form-control" id="exampleInputName"  placeholder="Enter Name">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email"  name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </body>
    </html>
    `)
}

exports.getRegData =  (req,res) =>{

    // console.log(req.body)
    // res.status(200).send(req.body)
  

    // Direct Method Mongoose

    // const users  =  new userModel(req.body)

    //     users.save().then((result)=>{
          
    //             res.status(200).send("User Registered Successfully")


    //     }).catch((err)=>{


    //         res.status(400).send(err)

    //     })



    // method : with Query
     // npm install bcrypt

    bcrypt.genSalt(10 ,  (err, salt)=>{
      if(err) { res.status(403).send({err: "Something went wrong in salt generation"}) }
      else
      {
        bcrypt.hash(req.body.password ,  salt ,  (err ,  hash)=>{
          if(err) { res.status(403).send({err: "Something went wrong "}) }
          else
          {
            userModel.insertMany({name : req.body.name ,  email : req.body.email  ,  password : hash  }).then((result)=>{
              res.status(200).send({ msg :  "User Registerd Sucessfully"})
            }).catch((err)=>{
              res.status(403).send({err: "Somethig went wrong"})
        
            })
          }
          
        })
      }
    })
}


exports.userLogin  = (req,res)=>{

  userModel.find({"email" : req.body.email}).then((result)=>{

    if(result.length === 0)
    {
      res.status(403).send({msg : "User Not Found"})
    }
    else
    {
      bcrypt.compare(req.body.password ,  result[0].password , (err , status  )=>{
        if(err)
        {
          res.status(403).send({msg : "Something went Wrong"})
        }
        else{
          if(status  === true)
          {
            res.status(200).send({msg : "User Login Sucessfully" ,  id : result[0]._id})
          }
          else{
            res.status(403).send({msg : "Incorrect Password"})

          }
        }
      })
    }

  }).catch((err)=>{

    res.status(403).send({msg  : "Somethig went wrong"})

  })

}



exports.addProduct =  (req,res) =>{

  products.insertMany({
    p_name : req.body.p_name , 
    p_price : req.body.p_price,
    p_desc  : req.body.p_desc,
    p_image : req.body.p_image,
    avl_quantity : req.body.avl_quantity,
    p_cat : req.body.p_cat
   }).then((result)=>{
    console.log(result)

    res.status(200).send({msg : "Product Added Successfully"})

   }).catch((err)=>{
    console.log(err)

    res.status(400).send("Something Went Wrong")
   })
   

   

}