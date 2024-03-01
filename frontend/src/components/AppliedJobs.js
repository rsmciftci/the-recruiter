import React, { useEffect, useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

const AppliedJobs = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('cv', selectedFile);

    console.log(formData)

    try {
      const response = await fetch('http://localhost:8000/api/cvtest/', {
        method: 'POST',
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

  const [showAlertDanger, setShowAlertDanger] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlertDanger(false);
    }, 3000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
 

      <div style={{
        position: 'fixed',
        bottom: 25,
        right: 0,
        width: 500,
        zIndex: 9999,
      }}>
       
        {/* <h2>Upload CV</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cv">Choose a CV:</label><br />
        <input type="file" id="cv" name="cv" accept=".pdf,.doc,.docx,.png" onChange={handleFileChange} /><br /><br />
        <button type="submit">Submit</button>
      </form> */}
        <Alert variant="danger" show={showAlertDanger} onClose={() => setShowAlertDanger(false)} dismissible>
          Password is wrong! 
        </Alert>
      </div>
 
  );
};

export default AppliedJobs;
