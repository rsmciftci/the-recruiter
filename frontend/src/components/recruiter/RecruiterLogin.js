import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import styles from './RecruiterLogin.module.css'
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import recruiterService from '../../services/RecruiterService';
import { setRecruiter, updateRecruiterLogin } from '../../redux/recruiterSlice';

function RecruiterLogin() {
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
        e.preventDefault();
        recruiterService.login(loginData)
            .then(response => {
                delete response.data.password //TODO: change backend to remove password from response
                dispatch(setRecruiter(response.data))
                console.log(response.data)
                dispatch(updateRecruiterLogin())             

            })
            .catch(error => {
               
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
                    <Button variant="success" href='http://localhost:3000/recruiter/new-recruiter'>Create new account</Button>
                </div>


            </div>
        </div >



    );
}

export default RecruiterLogin;