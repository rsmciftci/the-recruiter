import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import styles from './TheNavbar.module.css'
import { setLoggedin } from '../redux/candidateSlice';

function TheNavbar() {

  function logOut(){
    dispatch(setLoggedin());
    window.location.href = '/';

  }
  const dispatch = useDispatch();
  const candidateData = useSelector(state => state.data.candidateData);

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container>

          <Navbar.Brand href="/">
            <img src='the-recruiter.png' width={132} height={30} alt='the-recruiter-logo'></img>
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
                <Nav.Link href="/applied-jobs" className={styles.oneline}>Jobs Applied</Nav.Link>
              </Nav> : ""
            }
            {candidateData.login ? 
              <InputGroup className={styles.centersearch}>
                <Form.Control
                  placeholder="Search Jobs"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onKeyDown={(e) => { console.log("Search by Enter") }}
                />
              </InputGroup> : ""
            }
            {candidateData.login  ? 
              <Nav>
                <Nav.Link onClick={() => logOut()} style={{ paddingLeft: 900 }}>Logout</Nav.Link>
              </Nav>  : ""
            }

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default TheNavbar;