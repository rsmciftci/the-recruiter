import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeProfileEdit } from '../redux/profileSlice';
import { IoMdCloseCircleOutline } from "react-icons/io";
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/esm/Image';
import Table from 'react-bootstrap/esm/Table';
import Form from 'react-bootstrap/Form';
import { FaFilePdf } from "react-icons/fa6";
import styles from './ProfileEdit.module.css'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import ButtonMUI from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import candidateService from '../services/CandidateService';
import { default_female_photo, default_male_photo, setCandidate } from '../redux/candidateSlice';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

function ProfileEdit() {

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
    const successfullUpdate = () => toast.success('Your profile successfully updated.', {
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

                (error.response.status == 401) ? notifyWrongPassword() : notifySomethingWentWrong()

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
                size="l"
                aria-labelledby="contained-modal-title-vcenter"
                centered
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

                            <Col>
                                {(candidateData.photo) ? <Image src={candidateData.base_url + candidateData.photo} roundedCircle className={styles.profilePhoto} /> : ""}
                                {(!candidateData.photo && candidateData.gender == "female") ?
                                    <Image src={default_female_photo} roundedCircle className={styles.profilePhoto} />
                                    :
                                    <Image src={default_male_photo} roundedCircle className={styles.profilePhoto} />
                                }
                            </Col>



                            <div className={styles.UploadNewPhoto}>
                                <ButtonMUI

                                    component="label"
                                    role={undefined}
                                    variant="contained"
                                    tabIndex={-1}
                                    startIcon={<CloudUploadIcon />}
                                >
                                    Choose Photo
                                    <VisuallyHiddenInput type="file" name="photo" value={newProfile.photo} onChange={handleChange} />

                                </ButtonMUI>
                                <ButtonMUI component="label"
                                    role={undefined}
                                    variant="contained"
                                    tabIndex={-1}
                                    className={styles.buttonmuiupdate}

                                >Update</ButtonMUI>
                            </div>



                            <div className={styles.divCenter}>
                                <FaFilePdf className={styles.pdfIcon} />
                                <ButtonMUI
                                    component="label"
                                    role={undefined}
                                    variant="contained"
                                    tabIndex={-1}
                                    startIcon={<CloudUploadIcon />}
                                    className={styles.buttonmui}
                                >
                                    Choose CV
                                    <VisuallyHiddenInput type="file" name="cv" value={newProfile.cv} onChange={handleChange} />

                                </ButtonMUI>
                                <ButtonMUI component="label"
                                    role={undefined}
                                    variant="contained"
                                    tabIndex={-1}
                                    className={styles.buttonmuiupdate}

                                >Update</ButtonMUI>

                            </div>



                            <Table>





                            </Table>


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
                                label="Current Position">
                                <Form.Control type="text" value={newProfile.current_position} name="current_position" onChange={handleChange} />
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
                                className={styles.passwordInput}
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