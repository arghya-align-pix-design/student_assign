import React, { useState } from 'react';

function TeacherForm() {
  const [formData, setFormData] = useState({
    name: '',
    classAssigned: '',
    email: '',
    phoneNumbers: ['', ''],
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
      const response = await fetch('/api/teachers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Teacher registered successfully!');
        setFormData({
          name: '',
          classAssigned: '',
          email: '',
          phoneNumbers: ['', ''],
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
        <label>Class-Assigned:</label>
        <input
          type="text"
          name="classAssigned"
          value={formData.classAssigned}
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
      <button type="submit">Register Student</button>
    </form>
  );
}

export default TeacherForm;