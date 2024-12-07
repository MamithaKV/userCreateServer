const express = require('express')
const userController =require('../controller/userController')

const router = new express.Router()

// register-post
router.post('/register',userController.registerUser)

// login-post
router.post('/login',userController.loginUser)

// one user
router.post('/oneUser',userController.getOneUser)
// get all user
router.get('/alluser',userController.getAllUser)



module.exports=router