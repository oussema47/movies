const express = require("express")

const { RegisterValidation, Validation, LoginValidation } = require("../middlewares/Register")
const { isAuth } = require("../middlewares/isAuth")
const { Register, Login } = require("../controllers/auth")
const AuthRoute = express.Router()


AuthRoute.post('/signUp', RegisterValidation, Validation, Register)




AuthRoute.post('/signIn', LoginValidation, Validation, Login)


AuthRoute.get('/current', isAuth, (req, res) => res.send(req.user))



module.exports = AuthRoute