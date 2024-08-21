const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {

    //deleting previoys ones
    await prisma.student.deleteMany();
    await prisma.teacher.deleteMany();
  // Seed data for the Student model
  await prisma.student.createMany({
    data: [
      {
        name: 'John Doe',
        dob: new Date('2000-01-01'),
        email: 'john.doe1654@example.com',
        phoneNumbers: ['1234567890', '0987654321'],
        fatherName: 'Michael Doe',
        motherName: 'Jane Doe',
        fatherOccupation: 'Engineer',
        motherOccupation: 'Teacher',
      },
      {
        name: 'Jane Smith',
        dob: new Date('2001-02-02'),
        email: 'jane.smith9231@example.com',
        phoneNumbers: ['1234509876', '6789012345'],
        fatherName: 'Robert Smith',
        motherName: 'Emily Smith',
        fatherOccupation: 'Doctor',
        motherOccupation: 'Nurse',
      },
    ],
  });

  // Seed data for the Teacher model
  await prisma.teacher.createMany({
    data: [
      {
        name: 'Mr. Anderson',
        classAssigned: 'Math 101',
        email: 'anderson36945@example.com',
        phoneNumbers: ['5551234567'],
      },
      {
        name: 'Ms. Johnson',
        classAssigned: 'English 202',
        email: 'johnson@example.com',
        phoneNumbers: ['5559876543'],
      },
    ],
  });

  console.log('Database has been seeded');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
