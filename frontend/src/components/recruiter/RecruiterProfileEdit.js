import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeProfileEdit } from '../../redux/profileSlice';
import { IoMdCloseCircleOutline } from "react-icons/io";
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/esm/Image';
import Table from 'react-bootstrap/esm/Table';
import Form from 'react-bootstrap/Form';
import styles from './RecruiterProfileEdit.module.css'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import ButtonMUI from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import candidateService from '../../services/CandidateService';
import { baseURL, default_female_photo, default_male_photo, setCVState, setCandidate, setCandidateWithoutCVandPhoto, setPhotoState } from '../../redux/candidateSlice';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import recruiterService from '../../services/RecruiterService';
import { setRecruiter } from '../../redux/recruiterSlice';


function ProfileEdit() {

    const recruiter = useSelector(state => state.data.recruiterSlice);


    const [newProfile, setNewProfile] = useState({
        id: recruiter.id,
        first_name: recruiter.first_name,
        surname: recruiter.surname,
        email: recruiter.email,
        phone: recruiter.phone,
        company: recruiter.company,
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
        e.preventDefault();
        recruiterService.updateRecruiter(newProfile)
            .then(response => {
                notifySomethingWentWrong()

                delete response.data.password //TODO: change backend to remove password from response
                dispatch(setRecruiter(newProfile))
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
        <div>
            <div>
                <ToastContainer />
            </div>
            <Modal
                show={true}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className={styles.outerDiv}
            >
                <Modal.Header>

                    <Modal.Title id="contained-modal-title-vcenter">
                        Editing Profile
                    </Modal.Title>
                    <IoMdCloseCircleOutline style={{
                        width: 34,
                        height: 31
                    }} onClick={() => dispatch(closeProfileEdit())} />
                </Modal.Header>
                <Modal.Body>
                    <div className={styles.divCenter}>
                        <Row>
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
                                label="Phone">
                                <Form.Control type="text" value={newProfile.phone} name="phone" onChange={handleChange} />
                            </FloatingLabel>

                            <FloatingLabel
                                className={styles.FloatingLabel}
                                controlId="floatingInput"
                                label="Company">
                                <Form.Control type="text" value={newProfile.company} name="company" onChange={handleChange} />
                            </FloatingLabel>

                            <FloatingLabel
                                className={styles.FloatingLabel}
                                controlId="floatingInput"
                                label="Current Password">
                                <Form.Control type="password" value={newProfile.password} name="password" onChange={handleChange} />
                            </FloatingLabel>
                        </Row>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => dispatch(closeProfileEdit())} >Close</Button>
                    <Button onClick={handleSubmit}>Update</Button>

                </Modal.Footer>
            </Modal>


        </div >
    );
}

export default ProfileEdit;