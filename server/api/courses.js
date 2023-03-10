const router = require("express").Router();
const {
  models: { Course },
} = require("../db");
module.exports = router;
 
router.get("/", async (req, res, next) => {
  try {
    const courses = await Course.findAll({});
    res.json(courses);
  } catch (err) {
    next(err);
  }
});

// router.post("/", async (req, res, next) => {
//   try {
//     res.status(201).send(await Course.create(req.body));
//   } catch (e) {
//     next(e);
//   }
// });

router.get("/:id", async (req, res, next) => {
  try {
    const user = await Course.findByPk(req.params.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

// router.put("/:id", async (req, res, next) => {
//   try {
//     const user = await User.findByPk(req.params.id);
//     res.send(await user.update(req.body));
//   } catch (e) {
//     next(e);
//   }
// });
