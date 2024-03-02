import React, { useEffect, useState } from 'react';
import { Bounce, Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppliedJobs = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('photo', selectedFile);

    try {
      const response = await fetch('http://localhost:8000/api/candidate-photo/23', {
        method: 'PUT',
        body: formData,
      });

      if (response.ok) {
        console.log('File uploaded successfully!');
      } else {
        console.error('Failed to upload file');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (

    <div>





      <h2>Upload CV</h2>
      <form onSubmit={handleSubmit}>
        <label >Choose a CV:</label><br />
        <input type="file" id="photo" name="photo" accept=".pdf,.doc,.docx,.png" onChange={handleFileChange} /><br /><br />
        <button type="submit">Submit</button>
      </form>

    </div>
  );
};

export default AppliedJobs;
