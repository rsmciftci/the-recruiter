import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import styles from './Home.module.css'
import Button from 'react-bootstrap/Button';
import { dataFunc } from '../redux/dataSlice';
import { useDispatch } from 'react-redux';

function HomeLogout() {
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <div className={styles.overlay}>
            </div>



            <div className={styles.divcenter}>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                >
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>

                <div className={styles.divgap}>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                </div>

                <div className={styles.divgap}>
                    <Button variant="primary" style={{ "width": "100%" }}>Log in</Button>{' '}
                </div>

                <div className={[styles.textcenter]}>
                    <a href='/forgotten'>Forgotten password?</a>
                </div>
                <hr className={styles.horizontalline} />
                <div className={styles.centerbutton}>
                    {/* TODO : remove onClick */}
                    <Button variant="success"  onClick={() => dispatch(dataFunc())}>Create new account</Button>
                </div>


            </div>
        </div >



    );
}

export default HomeLogout;