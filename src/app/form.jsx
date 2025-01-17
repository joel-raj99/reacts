import React, { useState } from 'react';

export default function Text3() {
  const [textValue, setTextValue] = useState('');   // State for text input
  const [passwordValue, setPasswordValue] = useState('');   // State for password input
  const [error, setError] = useState('');  // State to store error message

  const handleTextChange = (e) => {
    setTextValue(e.target.value);  // Update state with current text input
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);  // Update state with current password input
  };

  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent form submission

    // Form validation: Check if text input is empty or exceeds max length
    if (textValue.trim() === '') {
      setError('Filename is required!');  // Set error for empty text input
      return;  // Prevent form submission
    }
    
    // Check if text input exceeds maximum allowed length
    if (textValue.length > 10) {
      setError('Filename must be at most 10 characters!');  // Set error for exceeding max length
      return;  // Prevent form submission
    }

    // If all validations pass, clear the error message
    setError('');
    
    console.log("Text Input Value:", textValue);  // Log the current text input value
    console.log("Password Value:", passwordValue);  // Log the current password input value
  };

  return (
    <div>
      <h1>REACT FORM WITH VALIDATION (LENGTH)</h1>
      <form onSubmit={handleSubmit}>
        <label>Filename:</label>
        <input 
          className='border border-success ml-5 '
          type="text" 
          value={textValue} 
          onChange={handleTextChange}  // Controlled input for text
        />
        <br/>
        <label>Password:</label>
        <input 
          className='border border-success ml-5 '
          type="password" 
          value={passwordValue} 
          onChange={handlePasswordChange}  // Controlled input for password
        />
        
        {/* Display error message if validation fails */}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit" className='btn btn-secondary btn-sm ml-4'>Submit</button>  {/* Submit button */}
      </form>
    </div>
  );
}
