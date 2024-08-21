import React, { useState } from 'react';

function StudentForm() {
  const [formData, setFormData] = useState({
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
    if (name.startsWith('phoneNumbers')) {
      const index = name.split('.')[1];
      const phoneNumbers = [...formData.phoneNumbers];
      phoneNumbers[index] = value;
      setFormData({ ...formData, phoneNumbers });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Student registered successfully!');
        setFormData({
          name: '',
          dob: '',
          email: '',
          phoneNumbers: ['', ''],
          fatherName: '',
          motherName: '',
          fatherOccupation: '',
          motherOccupation: '',
        });
      } else {
        alert('Failed to register student');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Date of Birth:</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Phone Number 1:</label>
        <input
          type="tel"
          name="phoneNumbers.0"
          value={formData.phoneNumbers[0]}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Phone Number 2:</label>
        <input
          type="tel"
          name="phoneNumbers.1"
          value={formData.phoneNumbers[1]}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Father's Name:</label>
        <input
          type="text"
          name="fatherName"
          value={formData.fatherName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Mother's Name:</label>
        <input
          type="text"
          name="motherName"
          value={formData.motherName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Father's Occupation:</label>
        <input
          type="text"
          name="fatherOccupation"
          value={formData.fatherOccupation}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Mother's Occupation:</label>
        <input
          type="text"
          name="motherOccupation"
          value={formData.motherOccupation}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Register Student</button>
    </form>
  );
}

export default StudentForm;
