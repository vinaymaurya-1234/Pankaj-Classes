import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import './Admissionpg.css';

const Admissionpg = () => {
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [parentName, setParentName] = useState('');
  const [parentContact, setParentContact] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [gender, setGender] = useState('');
  const [course, setCourse] = useState('');
  const [standard, setStandard] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Add the form data to Firestore under the "admissions" collection
      await addDoc(collection(db, 'admissions'), {
        fullName,
        dob,
        contact,
        email,
        parentName,
        parentContact,
        parentEmail,
        gender,
        course,
        standard,
        timestamp: new Date()
      });
      alert('Admission successful & data saved in Firestore!');
      // Reset the form fields
      setFullName('');
      setDob('');
      setContact('');
      setEmail('');
      setParentName('');
      setParentContact('');
      setParentEmail('');
      setGender('');
      setCourse('');
      setStandard('');
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="admission-container">
      <div className="admission-box">
        <h2>Admission Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          </div>

          <div className="form-group">
            <label>Date of Birth</label>
            <input type="text" value={dob} onChange={(e) => setDob(e.target.value)} required />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Contact Number</label>
            <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="form-group">
            <label>Parent's Name</label>
            <input type="text" value={parentName} onChange={(e) => setParentName(e.target.value)} required />
          </div>

          <div className="form-group">
            <label>Parent's Contact Number</label>
            <input type="text" value={parentContact} onChange={(e) => setParentContact(e.target.value)} required />
          </div>

          <div className="form-group">
            <label>Parent's Email</label>
            <input type="email" value={parentEmail} onChange={(e) => setParentEmail(e.target.value)} required />
          </div>

          <div className="form-group">
            <label>Course</label>
            <select value={course} onChange={(e) => {
              setCourse(e.target.value);
              setStandard('');
            }} required>
              <option value="">Select Course</option>
              <option value="ssc">SSC</option>
              <option value="science">Science</option>
              <option value="commerce">Commerce</option>
            </select>
          </div>

          {course && (course === 'science' || course === 'commerce') && (
            <div className="form-group">
              <label>Standard</label>
              <select value={standard} onChange={(e) => setStandard(e.target.value)} required>
                <option value="">Select Standard</option>
                <option value="11th">11th</option>
                <option value="12th">12th</option>
              </select>
            </div>
          )}

          {error && <p className="error-message">{error}</p>}

          <div className="form-buttons">
            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Processing...' : 'Submit'}
            </button>
            <button type="reset" onClick={() => {
              setFullName('');
              setDob('');
              setContact('');
              setEmail('');
              setParentName('');
              setParentContact('');
              setParentEmail('');
              setGender('');
              setCourse('');
              setStandard('');
            }}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admissionpg;
