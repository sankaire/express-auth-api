const router = require("express").Router()

//register
router.post('/register', (req, res) =>{
    res.send("register")
})

//login
router.post('/loggin', (req, res) =>{
    res.send("login")
})

module.exports = router