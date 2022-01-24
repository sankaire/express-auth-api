const router = require("express").Router()
const User = require("../model/User")

//register
router.post('/register', async (req, res) =>{
    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    try{
        const savedUser = await user.save()
        res.send(savedUser)
    } catch(err){
        res.status(400).send(err)
    }
})

//login
router.post('/login', (req, res) =>{
    res.send("login")
}) 

module.exports = router