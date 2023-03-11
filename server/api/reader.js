const router = require("express").Router();
const {
  models: { Course, Book },
} = require("../db");
module.exports = router;
 
// GET /api/reader/:bookId
router.get("/:bookId", async (req, res, next) => {
  try {
    const book = await Book.findOne({
        where: {
            id: req.params.bookId
        }
    });
    res.json(book);
  } catch (err) {
    next(err);
  }
});

// router.get("/:id", async (req, res, next) => {
//   try {
//     const user = await Course.findByPk(req.params.id);
//     res.json(user);
//   } catch (err) {
//     next(err);
//   }
// });
