var express = require('express');
var router = express.Router();
const adduser = require('../models/user');
const saltRounds = 10;
const bodyParser = require('body-parser');

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
    console.log(req.body.username)
    if (result) {
      result.comparePassword(req.body.password, function (err, isMatch) {
        console.log(isMatch)
        if (err) throw err;
        if (isMatch) {
          res.json({"status": "auth success", "obj": result })

        } else {
          res.json({"status": "auth failed" })
        }
      });

    } else {
      res.json({"status": "auth failed" })

    }
  } catch (error) {
    res.send(error)
    console.log(error)
  }
});

module.exports = router;