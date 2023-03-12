const router = require("express").Router();
const {
  models: { Course, User, Course_Sub_Category, User_History },
} = require("../db");

module.exports = router;
 
// GET /api/userHistory/:userId
router.get("/:userId", async (req, res, next) => {
  try {
    const courses = await User_History.findAll({
        where: {
            userId: req.params.userId,
        },
        include: [Course]
    });
    res.json(courses);
  } catch (err) {
    next(err);
  }
});

//POST /api/userHistory/:userId
router.post("/:userId", async (req, res, next) => {
  try {
    const { courseId } = req.body;
    const userHistory = await User_History.create({ last_opened: new Date() });
    const user = await User.findByPk(req.params.userId);
    const course = await Course.findByPk(courseId)
    userHistory.setUser(user);
    userHistory.setCourse(course);
    res.json(userHistory);
  } catch (err) {
    next(err);
  }
});

// GET /api/useHistory/me
router.get("/me", async (req, res, next) => {
    try {
      const user = await User.findByToken(req.headers.authorization);
      res.json(user.id);
    } catch (ex) {
      next(ex);
    }
  });
