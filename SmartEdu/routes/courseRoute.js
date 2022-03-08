const express = require('express');

const roleMiddleware = require('../middlewares/roleMiddleware');

const courseController = require('../controllers/courseController');

const router = express.Router();

router.route('/').post(roleMiddleware(["Teacher","Admin"]),courseController.createCourse); // bunu ifade eder  http://localhost:3000/courses/

router.route('/').get(courseController.getAllCourses);

router.route('/:slug').get(courseController.getCourse);

router.route('/:slug').delete(courseController.deleteCourse);

router.route('/:slug').put(courseController.updateCourse);

router.route('/enroll').post(courseController.enrollCourse);

router.route('/release').post(courseController.releaseCourse);

module.exports = router;