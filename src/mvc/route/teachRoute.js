const express = require('express');
const router = express.Router();
const teachController = require('../controller/teachController');

// Routes for CRUD operations
router.post('/teachers', teachController.createTeacher);
router.get('/teachers', teachController.getTeachers);
router.get('/teachers/email/:email', teachController.getTeacherByEmail);
router.put('/teachers/email/:email', teachController.updateTeacher);
router.delete('/teachers/email/:email', teachController.deleteTeacher);

module.exports = router;
