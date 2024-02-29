import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { initailize } from '../redux/candidateSlice';

import styles from './TheNavbar.module.css'

function TheNavbar() {

  const candidateData = useSelector(state => state.candidateData)
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container>

          <Navbar.Brand href="/">
            <img src='the-recruiter.png' width={132} height={30}></img>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          

            {candidateData.login  ?
              <Nav className="">
                <Nav.Link href="/profile">Profile</Nav.Link>
              </Nav> : ""
            }
            {candidateData.login  ? 
              <Nav className="">
                <Nav.Link href="#home2" className={styles.oneline}>Jobs Applied</Nav.Link>
              </Nav> : ""
            }
            {candidateData.login ? 
              <InputGroup className={styles.centersearch}>
                <Form.Control
                  placeholder="Search Jobs"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onKeyDown={(e) => { console.log(candidateData.login) }}
                />
              </InputGroup> : ""
            }
            {candidateData.login  ? 
              <Nav>
                <Nav.Link onClick={() => localStorage.setItem("loggedin", false)} style={{ paddingLeft: 900 }}>Logout</Nav.Link>
              </Nav>  : ""
            }

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default TheNavbar;