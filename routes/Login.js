var express = require('express');
var router = express.Router();
const adduser = require('../models/user');

router.post('/addusername', async function (req, res, next) {
    console.log(req.body)
    try {
        const newAddon = new adduser(req.body);
        const result = newAddon.save();
        res.send({ "status": "added", "obj": result })

    } catch (error) {
        res.status(400).send(error)
        console.log(error)
    }
});
router.post('/auth', async function (req, res, next) {
    try {
        const result = await adduser.findOne({ username: req.body.username })

        if (result.password == req.body.username) {
            console.log("yes")
        }
        else {
            res.json({ "status": "auth failed" })

        }
    } catch (error) { console.log(error) }
});
module.exports = router;
