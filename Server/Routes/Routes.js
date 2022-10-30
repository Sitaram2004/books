// const express  =  require('express')
// const router   = express.Router()
// const myController   =   require('../Controllers/Controller')

// router.get('/todos'  , myController.testApi )

// router.get('/register' , myController.register)
// router.post('/get_data' , myController.getRegData)
// router.post('/user_login' , myController.userLogin)


// router.post('/add_product' , myController.addProduct  )




// module.exports  =  router;
const express  =  require('express')
const router   = express.Router()
const myController   =   require('../Controllers/Controller')

router.get('/todos'  , myController.testApi )

router.get('/register' , myController.register)
router.post('/user_register' , myController.getRegData)
router.post('/user_login' , myController.userLogin)


router.post('/add_product' , myController.addProduct  )




module.exports  =  router;