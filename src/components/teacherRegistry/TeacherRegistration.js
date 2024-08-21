import React, { useState } from 'react';
import './TeacherRegistration.css';

const TeacherRegistration = ({ history }) => {
  const [teacher, setTeacher] = useState({
    name: '',
    classAssigned: '',
    email: '',
    phoneNumbers: ['', ''],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacher((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (e, index) => {
    const { value } = e.target;
    setTeacher((prev) => {
      const phoneNumbers = [...prev.phoneNumbers];
      phoneNumbers[index] = value;
      return { ...prev, phoneNumbers };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Replace with your API URL
    const response = await fetch('/api/teachers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(teacher),
    });
    if (response.ok) {
      history.push('/class-subject');  // Redirect to the class-subject page after successful registration
    }
  };

  return (
    <div className="teacher-registration">
      <h2>Teacher Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={teacher.name} onChange={handleChange} placeholder="Name" required />
        <input type="text" name="classAssigned" value={teacher.classAssigned} onChange={handleChange} placeholder="Class Assigned" required />
        <input type="email" name="email" value={teacher.email} onChange={handleChange} placeholder="Email" required />
        <input type="tel" name="phoneNumbers" value={teacher.phoneNumbers[0]} onChange={(e) => handlePhoneChange(e, 0)} placeholder="Phone Number 1" required />
        <input type="tel" name="phoneNumbers" value={teacher.phoneNumbers[1]} onChange={(e) => handlePhoneChange(e, 1)} placeholder="Phone Number 2" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default TeacherRegistration;
