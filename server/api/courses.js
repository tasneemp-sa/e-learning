const router = require("express").Router();
const {
  models: { Course },
} = require("../db");
const Course_Sub_Category = require("../db/models/Course_Sub_Category");
module.exports = router;
 
// GET /api/courses/
router.get("/", async (req, res, next) => {
  try {
    const courses = await Course.findAll();
    res.json(courses);
  } catch (err) {
    next(err);
  }
});

//GET /api/courses/:id
router.get("/:id", async (req, res, next) => {
  try {
    const course = await Course.findOne( {
      where: {
        id: req.params.id
      },
      include: [Course_Sub_Category]
    });
    res.json(course);
  } catch (err) {
    next(err);
  }
});
