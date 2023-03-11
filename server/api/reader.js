const router = require("express").Router();
const {
  models: { Course },
} = require("../db");
module.exports = router;
 
// GET /api/reader/:courseId
router.get("/:courseId", async (req, res, next) => {
  try {
    const course = await Course.findOne({
        where: {
            id: req.params.courseId
        }
    });
    res.json(course);
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
