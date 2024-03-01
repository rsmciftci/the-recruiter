import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
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

    const [newProfile, setNetProfile] = useState({
        photo: "",
        cv: "",
        name: "",
        surname: "",
        currentPosition: "",
        email: "",
        phone: "",
        postCode: "",
        town: "",
        city: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNetProfile({ ...newProfile, [name]: value });

    };


    const dispatch = useDispatch()

    return (
        <div>
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
                                <Image src="profile.png" roundedCircle className={styles.profilePhoto} />
                            </Col>



                            <div className={styles.UploadNewPhoto}>
                                <ButtonMUI

                                    component="label"
                                    role={undefined}
                                    variant="contained"
                                    tabIndex={-1}
                                    startIcon={<CloudUploadIcon />}
                                >
                                    Upload Photo
                                    <VisuallyHiddenInput type="file" name="photo" value={newProfile.photo} onChange={handleChange} />

                                </ButtonMUI>
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
                                    Upload CV
                                    <VisuallyHiddenInput type="file" name="cv" value={newProfile.cv} onChange={handleChange} />

                                </ButtonMUI>
                            </div>



                            <Table>





                            </Table>


                            <FloatingLabel
                                className={styles.FloatingLabel}
                                controlId="floatingInput"
                                label="Name">
                                <Form.Control type="text" value="Rasim" name="name" />
                            </FloatingLabel>
                            <FloatingLabel
                                className={styles.FloatingLabel}
                                controlId="floatingInput"
                                label="Surname">
                                <Form.Control type="text" value="CHIFTCHI" name="surname" />
                            </FloatingLabel>
                            <FloatingLabel
                                className={styles.FloatingLabel}
                                controlId="floatingInput"
                                label="Current Position">
                                <Form.Control type="text" value="Java Developer" name="current_position" />
                            </FloatingLabel>
                            <FloatingLabel
                                className={styles.FloatingLabel}
                                controlId="floatingInput"
                                label="Email">
                                <Form.Control type="email" value="rsmchiftchi@gmail.com" name="email" />
                            </FloatingLabel>
                            <FloatingLabel
                                className={styles.FloatingLabel}
                                controlId="floatingInput"
                                label="Phone">
                                <Form.Control type="text" value="07565391538" name="phone" />
                            </FloatingLabel>
                            <FloatingLabel
                                className={styles.FloatingLabel}
                                controlId="floatingInput"
                                label="Post Code">
                                <Form.Control type="text" value="E15 1UB" name="postcode" />
                            </FloatingLabel>
                            <FloatingLabel
                                className={styles.FloatingLabel}
                                controlId="floatingInput"
                                label="Town">
                                <Form.Control type="text" value="Stratford" name="town" />
                            </FloatingLabel>
                            <FloatingLabel
                                className={styles.FloatingLabel}
                                controlId="floatingInput"
                                label="City">
                                <Form.Control type="text" value="London" name="city" />
                            </FloatingLabel>

                        </Row>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => dispatch(closeProfileEdit())} >Close</Button>
                    <Button >Save</Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ProfileEdit;