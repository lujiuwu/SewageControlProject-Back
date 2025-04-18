const express = require('express')
const router = express.Router()

const { users_register,users_login } = require('../router-handlers/users')

router.post("/register", users_register)
router.post("/login",users_login)

module.exports = router