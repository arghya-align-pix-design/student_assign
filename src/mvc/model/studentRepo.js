const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createStudent(data) {
  return await prisma.student.create({ data });
}

async function getStudents() {
  return await prisma.student.findMany();
}

async function getStudentById(id) {
  return await prisma.student.findUnique({
    where: { id },
  });
}

async function updateStudent(id, data) {
  return await prisma.student.update({
    where: { id },
    data,
  });
}

async function deleteStudent(id) {
  return await prisma.student.delete({
    where: { id },
  });
}

module.exports = {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};