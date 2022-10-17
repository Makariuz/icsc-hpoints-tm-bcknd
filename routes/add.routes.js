const router = require("express").Router();
const Add = require("../models/Add");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  const std = await Add.find();
  res.json(std); //erase this comment
});

router.get("/search", async (req,res) => {
  const qq = await Add.find({}).toArray(function (err, result) {
    if (err){
      res.status(400).send('error')
    } else {
      res.json(result)
    }
  })
})

router.get("/olive", async (req, res) => {
  try {

    const oliveHouse = await Add.find();
  let filteredHouse = oliveHouse.filter((o) => o.house === "Olive Branches");

  res.json(filteredHouse);
  } catch (err) {
    console.log('not')
  }
  
});

router.get("/testHouse", async (req, res) => {
  try {

    const testHouse = await Add.find();
  let filteredHouse = testHouse.filter((o) => o.house === "testHouse");

  res.json(filteredHouse);
  } catch (err) {
    console.log('not')
  }
  
});

router.get("/water", async (req, res) => {
  const waterHouse = await Add.find();
  let filteredHouse = waterHouse.filter((o) => o.house === "Water Walkers");
  res.json(filteredHouse);
});

router.get("/student/:id", async (req, res) => {
  const studentId = await Add.findById(req.params.id);

  studentId !== null
    ? res.status(200).json(studentId)
    : res.status(200).json("not found");
});

router.get("/fishers", async (req, res) => {
  const fishHouse = await Add.find();
  let filteredHouse = fishHouse.filter((o) => o.house === "Fishers of Man");
  res.json(filteredHouse);
});

router.get("/lights", async (req, res) => {
  const lightsHouse = await Add.find();
  let filteredHouse = lightsHouse.filter(
    (o) => o.house === "Lights of the hill"
  );
  res.json(filteredHouse);
});

router.put("/add", async (req, res) => {


  let {name, house} = req.body
  const newUser = new Add({
    name,
    house,
  });

  //save user and send response
  const user = await newUser.save();
  res.status(200).json(user);
});

router.put("/add-points/:id", async (req, res) => {
  let { newPoints } = req.body;

  let updatePoints = await Add.findByIdAndUpdate(
    req.params.id,
    { $inc: { points: newPoints } },
    { new: true }
  );
  
  res.json(updatePoints);
});


router.put("/remove-points/:id", async (req, res) => {
  let { lessPoints } = req.body;

  let updatePoints = await Add.findByIdAndUpdate(
    req.params.id,
    { $inc: { points: -lessPoints } },
    { new: true }
  );
  
  res.json(updatePoints);
});

module.exports = router;
