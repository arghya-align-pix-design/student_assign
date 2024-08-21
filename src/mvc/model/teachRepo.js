const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createTeacher(data) {
  return await prisma.teacher.create({ data });
}

async function getTeachers() {
  return await prisma.teacher.findMany();
}

async function getTeacherByEmail(email) {
  return await prisma.teacher.findUnique({
    where: { email },
  });
}

async function updateTeacher(email, data) {
  return await prisma.teacher.update({
    where: { email },
    data,
  });
}

async function deleteTeacher(email) {
  return await prisma.teacher.delete({
    where: { email },
  });
}

module.exports = {
  createTeacher,
  getTeachers,
  getTeacherByEmail,
  updateTeacher,
  deleteTeacher,
};
