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

router.get("/:id", async (req, res, next) => {
  try {
    const user = await Course.findByPk(req.params.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
});
