const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'));
router.use('/courses', require('./courses'));
router.use('/subCategories', require('./sub_categories'));
router.use('/reader', require('./reader'));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
