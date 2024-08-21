import React, { useState } from 'react';
import './StudentRegistration.css';

const StudentRegistration = ({ history }) => {
  const [student, setStudent] = useState({
    name: '',
    dob: '',
    email: '',
    phoneNumbers: ['', ''],
    fatherName: '',
    motherName: '',
    fatherOccupation: '',
    motherOccupation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (e, index) => {
    const { value } = e.target;
    setStudent((prev) => {
      const phoneNumbers = [...prev.phoneNumbers];
      phoneNumbers[index] = value;
      return { ...prev, phoneNumbers };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Replace with your API URL
    const response = await fetch('/api/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student),
    });
    if (response.ok) {
      history.push('/class');  // Redirect to the class page after successful registration
    }
  };

  return (
    <div className="student-registration">
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={student.name} onChange={handleChange} placeholder="Name" required />
        <input type="date" name="dob" value={student.dob} onChange={handleChange} placeholder="Date of Birth" required />
        <input type="email" name="email" value={student.email} onChange={handleChange} placeholder="Email" required />
        <input type="tel" name="phoneNumbers" value={student.phoneNumbers[0]} onChange={(e) => handlePhoneChange(e, 0)} placeholder="Phone Number 1" required />
        <input type="tel" name="phoneNumbers" value={student.phoneNumbers[1]} onChange={(e) => handlePhoneChange(e, 1)} placeholder="Phone Number 2" required />
        <input type="text" name="fatherName" value={student.fatherName} onChange={handleChange} placeholder="Father's Name" required />
        <input type="text" name="motherName" value={student.motherName} onChange={handleChange} placeholder="Mother's Name" required />
        <input type="text" name="fatherOccupation" value={student.fatherOccupation} onChange={handleChange} placeholder="Father's Occupation" />
        <input type="text" name="motherOccupation" value={student.motherOccupation} onChange={handleChange} placeholder="Mother's Occupation" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default StudentRegistration;
