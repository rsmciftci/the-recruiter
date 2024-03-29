import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import styles from './TheNavbar.module.css'
import { initailize, setLoggedin } from '../redux/candidateSlice';
import { initailize_appliedJobs } from '../redux/appliedJobsSlice';
import { useState } from 'react';
import { setJobSearchText } from '../redux/jobSearchSlice';
import { initailizeRecruiter } from '../redux/recruiterSlice';
import {  setCandidateSearchText } from '../redux/candidateSearchSlice';

function TheNavbar() {

  function logOut() {

    if (recruiterData.login) {
      dispatch(initailizeRecruiter());
      window.location.href = '/recruiter';

    } else {
      dispatch(setLoggedin());
      dispatch(initailize());
      dispatch(initailize_appliedJobs());
      window.location.href = '/';

    }
  }

  const dispatch = useDispatch();
  const candidateData = useSelector(state => state.data.candidateData);
  const recruiterData = useSelector(state => state.data.recruiterSlice);
  const candidateSearchText = useSelector(state => state.data.candidateSearchSlice.candidateSearchText);



  function searchJob(url) {
    if (url === "Enter" || url === "NumpadEnter") { window.location.href = "http://localhost:3000/search-jobs" }
  }

  function searchCandidate(url) {
    if (url === "Enter" || url === "NumpadEnter") { window.location.href = "http://localhost:3000/recruiter/candidates/" + candidateSearchText }
  }

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container>

          <Navbar.Brand href="/">
            <img src='http://localhost:3000/the-recruiter.png' width={132} height={30} alt='the-recruiter-logo'></img>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">


            {candidateData.login ?
              <Nav className="">
                <Nav.Link href="/profile">Profile</Nav.Link>
              </Nav> : ""
            }
            {candidateData.login ?
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
                  onChange={(e) => dispatch(setJobSearchText(e.target.value))}

                  onKeyUp={(e) => { searchJob(e.code) }}
                />
              </InputGroup> : ""
            }


            {/* {recruiterData.login ?
              <Nav >
                <Nav.Link href="http://localhost:3000/recruiter/profile">Profile</Nav.Link>
              </Nav> : ""
            } */}
            {recruiterData.login ?
              <Nav className={styles.myjobs}>
                <Nav.Link href="http://localhost:3000/recruiter/myjobs" >My Jobs</Nav.Link>
              </Nav> : ""
            }
            {recruiterData.login ?
              <Nav className={styles.createJob}>
                <Nav.Link href="http://localhost:3000/recruiter/create-job" >Create Job</Nav.Link>
              </Nav> : ""
            }
            {recruiterData.login ?
              <InputGroup className={styles.centersearch}>
                <Form.Control
                  placeholder="Search Candidate"
                  aria-label="JobTitle"
                  aria-describedby="basic-addon1"
                  onChange={(e) => dispatch(setCandidateSearchText(e.target.value))}

                  onKeyUp={(e) => {searchCandidate(e.code)}}
                />
              </InputGroup> : ""
            }


            {(candidateData.login || recruiterData.login) ?
              <Nav>
                {/* TODO: initialize candidate data */}
                <Nav.Link onClick={() => logOut()} style={{ paddingLeft: 900 }}>Logout</Nav.Link>
              </Nav> : ""
            }

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default TheNavbar;