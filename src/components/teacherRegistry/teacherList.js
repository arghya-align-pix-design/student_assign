import React, { useState, useEffect } from 'react';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch('/api/teachers')
      .then((response) => response.json())
      .then((data) => setTeachers(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h2>Teacher List</h2>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher.id}>
            {teacher.name} - {teacher.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeacherList;
