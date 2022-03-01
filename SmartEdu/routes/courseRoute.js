const express = require('express');

const courseController = require('../controllers/courseController');

const router = express.Router();

router.route('/').post(courseController.createCourse); // bunu ifade eder  http://localhost:3000/courses/

router.route('/').get(courseController.getAllCourses);

module.exports = router;