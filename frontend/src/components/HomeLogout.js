import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import styles from './Home.module.css'
import Button from 'react-bootstrap/Button';
import { setLoggedin, setCandidate } from '../redux/candidateSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import candidateService from '../services/CandidateService';

function HomeLogout() {
    const dispatch = useDispatch();

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleSubmit = (e) => {
        console.log(loginData)
        e.preventDefault();
        candidateService.findUser(loginData)
            .then(response => {
                delete response.data.password //TODO: change backend to remove password from response
                dispatch(setCandidate(response.data))
                dispatch(setLoggedin())

            })
            .catch(error => {
                localStorage.setItem("loggedin", false)
            });
    };
    return (
        <div className={styles.container}>
            <div className={styles.overlay}>
            </div>



            <div className={styles.divcenter}>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                >
                    <Form.Control type="email" placeholder="name@example.com" name="email" value={loginData.email} onChange={handleChange} />
                </FloatingLabel>

                <div className={styles.divgap}>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" name="password" value={loginData.password} onChange={handleChange} />
                    </FloatingLabel>
                </div>

                <div className={styles.divgap}>
                    <Button variant="primary" style={{ "width": "100%" }} onClick={handleSubmit}>Log in</Button>{' '}
                </div>

                <div className={[styles.textcenter]}>
                    <a href='/forgotten'>Forgotten password?</a>
                </div>
                <hr className={styles.horizontalline} />
                <div className={styles.centerbutton}>
                    {/* TODO : remove onClick */}
                    <Button variant="success" onClick={() => dispatch(setLoggedin())}>Create new account</Button>
                </div>


            </div>
        </div >



    );
}

export default HomeLogout;