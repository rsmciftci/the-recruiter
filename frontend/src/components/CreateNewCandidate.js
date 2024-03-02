
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

    const candidateData = useSelector(state => state.data.candidateData);


    const [newProfile, setNewProfile] = useState({
        id: candidateData.id,
        first_name: candidateData.firstName,
        surname: candidateData.surname,
        current_position: candidateData.currentPosition,
        email: candidateData.email,
        phone: candidateData.phone,
        postcode: candidateData.postcode,
        town: candidateData.town,
        city: candidateData.city,
        gender: candidateData.gender,
        password: ""
    });

    const notifyWrongPassword = () => toast.error('Password is incorrect!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
    });
    const notifySomethingWentWrong = () => toast.error('Something went wrong!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
    });




    const handleSubmit = (e) => {
        console.log(newProfile)
        e.preventDefault();
        candidateService.updateUser(newProfile)
            .then(response => {
                notifySomethingWentWrong()

                delete response.data.password //TODO: change backend to remove password from response
                dispatch(setCandidate(newProfile))
                dispatch(closeProfileEdit())

            })
            .catch(error => {
                // dispatch(closeProfileEdit())
                // TODO: call alert function if response.data.status == 401

                (error.response.status === 401) ? notifyWrongPassword() : notifySomethingWentWrong()

            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProfile({ ...newProfile, [name]: value });
        console.log(newProfile.name)
    };

    const dispatch = useDispatch()

    return (
        <div className={styles.container}>
            <div className={styles.InputDiv}>
                <FloatingLabel
                    className={styles.FloatingLabel}
                    controlId="floatingInput"
                    label="Name">
                    <Form.Control type="text" value={newProfile.first_name} name="first_name" onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel
                    className={styles.FloatingLabel}
                    controlId="floatingInput"
                    label="Surname">
                    <Form.Control type="text" value={newProfile.surname} name="surname" onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel
                    className={styles.FloatingLabel}
                    controlId="floatingInput"
                    label="Email">
                    <Form.Control type="email" value={newProfile.email} name="email" onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel
                    className={styles.FloatingLabel}
                    controlId="floatingInput"
                    label="Current Position">
                    <Form.Control type="text" value={newProfile.current_position} name="current_position" onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel
                    className={styles.FloatingLabel}
                    controlId="floatingInput"
                    label="Phone">
                    <Form.Control type="text" value={newProfile.phone} name="phone" onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel
                    className={styles.FloatingLabel}
                    controlId="floatingInput"
                    label="Post Code">
                    <Form.Control type="text" value={newProfile.postcode} name="postcode" onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel
                    className={styles.FloatingLabel}
                    controlId="floatingInput"
                    label="Town">
                    <Form.Control type="text" value={newProfile.town} name="town" onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel
                    className={styles.FloatingLabel}
                    controlId="floatingInput"
                    label="City">
                    <Form.Control type="text" value={newProfile.city} name="city" onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel
                    className={styles.FloatingLabel}
                    controlId="floatingInput"
                    label="Password">
                    <Form.Control type="password" value={newProfile.password} name="password" onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel
                    className={styles.FloatingLabel}
                    controlId="floatingInput"
                    label="Password">
                    <Form.Control type="password" value={newProfile.password1} name="password1" onChange={handleChange} />
                </FloatingLabel>
                <hr className={styles.horizontalLine}></hr>

                <Button variant="primary">Sign Up</Button>


            </div>





        </div >
    );
}

export default CreateNewCandidate;