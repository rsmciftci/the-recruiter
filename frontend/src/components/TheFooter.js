import Navbar from 'react-bootstrap/Navbar';

function TheFooter() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark" fixed="bottom" >

       
        <p className='m-auto' style={{ textAlign : "center", color : "white" }}>Copyright © 2024 - The Recruiter</p>

 
    </Navbar>
  );
}

export default TheFooter;