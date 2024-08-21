const studentRepo = require('../model/studentRepo');
// Create a new student
async function createStudent(req, res) {
  try {
    const data = req.body;
    const student = await studentRepo.createStudent(data);
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create student' });
  }
}

// Get all students
async function getStudents(req, res) {
  try {
    const students = await studentRepo.getStudents();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch students' });
  }
}

// Get a student by ID
async function getStudentById(req, res) {
  try {
    const id = parseInt(req.params.id, 10);
    const student = await studentRepo.getStudentById(id);
    if (student) {
      res.status(200).json(student);
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch student' });
  }
}

// Update a student by ID
async function updateStudent(req, res) {
  try {
    const id = parseInt(req.params.id, 10);
    const data = req.body;
    const updatedStudent = await studentRepo.updateStudent(id, data);
    if (updatedStudent) {
      res.status(200).json(updatedStudent);
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update student' });
  }
}

// Delete a student by ID
async function deleteStudent(req, res) {
  try {
    const id = parseInt(req.params.id, 10);
    const deletedStudent = await studentRepo.deleteStudent(id);
    if (deletedStudent) {
      res.status(200).json({ message: 'Student deleted' });
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete student' });
  }
}

module.exports = {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};