const express = require('express');

const roleMiddleware = require('../middlewares/roleMiddleware');

const courseController = require('../controllers/courseController');

const router = express.Router();

router.route('/').post(roleMiddleware(["Teacher","Admin"]),courseController.createCourse); // bunu ifade eder  http://localhost:3000/courses/

router.route('/').get(courseController.getAllCourses);

router.route('/:slug').get(courseController.getCourse);

module.exports = router;