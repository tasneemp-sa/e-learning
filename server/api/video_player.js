const router = require("express").Router();
const {
  models: { Course, Video },
} = require("../db");
module.exports = router;
 
// GET /api/video-player/:videoId
router.get("/:videoId", async (req, res, next) => {
  try {
    const video = await Video.findOne({
        where: {
            id: req.params.videoId
        }
    });
    res.json(video);
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
