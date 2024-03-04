
import { useDispatch, useSelector } from 'react-redux';
import { closeProfileEdit } from '../redux/profileSlice';
import Form from 'react-bootstrap/Form';
import styles from './CreateNewCandidate.module.css'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import { useState } from 'react';
import candidateService from '../services/CandidateService';
import { setCVState, setCandidate, setPhotoState } from '../redux/candidateSlice';
import { Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';


function CreateNewCandidate() {



    const [candidate, setCandidate] = useState([]);
    const [passwords, setPasswords] = useState([]);

    function redirectToHomePage() {
        window.location.href = "/";
    }






    const handleSubmit = (e) => {
        console.log(candidate)
        e.preventDefault();
        if (passwords.password != passwords.password1) {
            alert("Passwords doesn't match!") //TODO: toast
        } else {
            candidateService.saveUser(candidate)
                .then(response => {
                    alert("Successfully Registered")
                    redirectToHomePage()

                })
                .catch(error => {

                    alert(error)
                });


        }

    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCandidate({ ...candidate, [name]: value });
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswords({ ...passwords, [name]: value });
        if (name === "password") {
            setCandidate({ ...candidate, [name]: value });
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.InputDiv}>
                <FloatingLabel
                    className={styles.FloatingLabel}
                    controlId="floatingInput"
                    label="Name">
                    <Form.Control type="text" value={candidate.first_name} name="first_name" onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel
                    className={styles.FloatingLabel}
                    controlId="floatingInput"
                    label="Surname">
                    <Form.Control type="text" value={candidate.surname} name="surname" onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel
                    className={styles.FloatingLabel}
                    controlId="floatingInput"
                    label="Email">
                    <Form.Control type="email" value={candidate.email} name="email" onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel
                    className={styles.FloatingLabel}
                    controlId="floatingInput"
                    label="Current Position">
                    <Form.Control type="text" value={candidate.current_position} name="current_position" onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel
                    className={styles.FloatingLabel}
                    controlId="floatingInput"
                    label="Phone">
                    <Form.Control type="text" value={candidate.phone} name="phone" onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel
                    className={styles.FloatingLabel}
                    controlId="floatingInput"
                    label="Post Code">
                    <Form.Control type="text" value={candidate.postcode} name="postcode" onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel
                    className={styles.FloatingLabel}
                    controlId="floatingInput"
                    label="Town">
                    <Form.Control type="text" value={candidate.town} name="town" onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel
                    className={styles.FloatingLabel}
                    controlId="floatingInput"
                    label="City">
                    <Form.Control type="text" value={candidate.city} name="city" onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel
                    className={styles.FloatingLabel}
                    controlId="floatingInput"
                    label="Password">
                    <Form.Control type="password" value={candidate.password} name="password" onChange={handlePasswordChange} />
                </FloatingLabel>
                <FloatingLabel
                    className={styles.FloatingLabel}
                    controlId="floatingInput"
                    label="Password">
                    <Form.Control type="password" value={candidate.password1} name="password1" onChange={handlePasswordChange} />
                </FloatingLabel>
                <FloatingLabel
                    className={styles.FloatingLabel}
                    controlId="floatingInput"
                    label="Gender">
                    <Form.Select aria-label="Default select example" value={candidate.gender} name="gender" onChange={handleChange}>
                        <option></option>
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                    </Form.Select >

                </FloatingLabel>
                <hr className={styles.horizontalLine}></hr>

                <Button variant="primary" onClick={handleSubmit}>Sign Up</Button>


            </div>





        </div >
    );
}

export default CreateNewCandidate;