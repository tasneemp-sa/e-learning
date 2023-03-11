const router = require("express").Router();
const {
  models: { Course, Course_Sub_Category },
} = require("../db");
module.exports = router;
 
//GET /api/subCategories/:subCategoryId
router.get("/:subCategoryId", async (req, res, next) => {
  try {
    const courses = await Course.findAll({
        where: {
            courseSubCategoryId: req.params.subCategoryId,
    },
    include: [Course_Sub_Category]

});
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
