const teacherRepo = require('../model/studentRepo');

// Create a new teacher
async function createTeacher(req, res) {
  try {
    const data = req.body;
    const teacher = await teacherRepo.createTeacher(data);
    res.status(201).json(teacher);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create teacher' });
  }
}

// Get all teachers
async function getTeachers(req, res) {
  try {
    const teachers = await teacherRepo.getTeachers();
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch teachers' });
  }
}

// Get a teacher by ID
async function getTeacherByEmail(req, res) {
  try {
    const email = req.params.email;
    const teacher = await teacherRepo.getTeacherByEmail(email);
    if (teacher) {
      res.status(200).json(teacher);
    } else {
      res.status(404).json({ error: 'Teacher not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch teacher' });
  }
}

// Update a teacher by email
async function updateTeacher(req, res) {
  try {
    const email = req.params.email;
    const data = req.body;
    const updatedTeacher = await teacherRepo.updateTeacher(email, data);
    if (updatedTeacher) {
      res.status(200).json(updatedTeacher);
    } else {
      res.status(404).json({ error: 'Teacher not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update teacher' });
  }
}

// Delete a teacher by email
async function deleteTeacher(req, res) {
  try {
    const email = req.params.email;
    const deletedTeacher = await teacherRepo.deleteTeacher(email);
    if (deletedTeacher) {
      res.status(200).json({ message: 'Teacher deleted' });
    } else {
      res.status(404).json({ error: 'Teacher not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete teacher' });
  }
}
module.exports = {
  createTeacher,
  getTeachers,
  getTeacherByEmail,
  updateTeacher,
  deleteTeacher,
};