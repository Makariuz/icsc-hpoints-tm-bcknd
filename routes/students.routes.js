const router = require("express").Router();
const StudentName = require("../models/Students");
const HouseName = require('../models/Houses')
const bcrypt = require("bcrypt");


router.get('/all', async (req, res) => {
    const std = await StudentName.find()
    res.json(std)
})



router.post('/add', async (req, res) => {
    const newUser = new StudentName({
        name: req.body.name,
        houseName: req.body.house,
      });

      //save user and send response
      const user = await newUser.save();
      res.status(200).json(user);

})
module.exports = router;
