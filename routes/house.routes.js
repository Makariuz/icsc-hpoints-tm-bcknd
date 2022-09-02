const router = require("express").Router();
const Houses = require("../models/Houses");




router.get("/", async (req, res) => {
    try{
        const houses = await Houses.find()
        res.status(200).json(houses)
    }catch(err){
        res.status(500).json(err)
    }
})

router.post('/add', async (req,res) => {

    const { name, students } = req.body

    try {
        const newHouse = await HouseName.create({
            Name: name,
            Students: [students]
        });
        res.status(200).json(newHouse)
    } catch (err) {
        res.status(500).json(err)
    }


})


module.exports = router;
