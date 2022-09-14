const router = require("express").Router();
const Add = require("../models/Add");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  const std = await Add.find();
  res.json(std);
});

router.get("/olive", async (req, res) => {
  const oliveHouse = await Add.find();
  let filteredHouse = oliveHouse.filter((o) => o.house === "Olive Branches");
  res.json(filteredHouse);
});

router.get("/water", async (req, res) => {
  const waterHouse = await Add.find();
  let filteredHouse = waterHouse.filter((o) => o.house === "Water Walkers");
  res.json(filteredHouse);
});

router.get("/fish", async (req, res) => {
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
  const newUser = new Add({
    name: req.body.name,
    house: req.body.house,
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
  let { newPoints } = req.body;

  let updatePoints = await Add.findByIdAndUpdate(
    req.params.id,
    { $inc: { points: -newPoints } },
    { new: true }
  );
  
  res.json(updatePoints);
});

module.exports = router;
