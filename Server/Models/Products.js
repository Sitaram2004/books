// const mongoose = require('mongoose')

// const ProductsSchema  =  new mongoose.Schema({
//   p_name : {
//     type :String,
//     unique :  true,
//     required : true

//   },
//   p_price : {
//     type  : Number,
//     required : true,
//     default  : 0
//   },
//   p_cat : {
//      type :String,
//      required : true
//    },
//   p_desc : {
//     type  :  String,
//     required : true
//   },
//   p_image : {
//     type : String,
//     required : true
//   },
//   avl_quantity : {
//     type : Number,
//     required : true,
//     default  : 0
//   }
// })

// const products  =  mongoose.model("Products" ,  ProductsSchema) 


// module.exports =  products;

const mongoose = require('mongoose')

const ProductsSchema  =  new mongoose.Schema({
  p_name : {
    type :String,
    unique :  true,
    required : true

  },
  p_price : {
    type  : Number,
    required : true,
    default  : 0
  },
  p_cat : {
    type :String,
    required : true
  },
  p_desc : {
    type  :  String,
    required : true
  },
  p_image : {
    type : String,
    required : true
  },
  avl_quantity : {
    type : Number,
    required : true,
    default  : 0
  }
})

const products  =  mongoose.model("Products" ,  ProductsSchema) 


module.exports =  products;


