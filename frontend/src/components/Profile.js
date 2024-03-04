import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Table from "react-bootstrap/esm/Table";
import { FaPencilAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import styles from './Profile.module.css'
import { openProfileEdit } from "../redux/profileSlice";
import Image from 'react-bootstrap/Image';
import 'react-toastify/dist/ReactToastify.css';
import { baseURL, default_female_photo, default_male_photo } from "../redux/candidateSlice";
import CV from "./CV";
function Profile() {

    const dispatch = useDispatch()
    const candidateData = useSelector(state => state.data.candidateData);

    return (

        <div>

            <div className={styles.border}>
                <Container>

                    <FaPencilAlt className={styles.editButton} onClick={() => dispatch(openProfileEdit())} />
                    <Row>
                        <Col>

                            {(candidateData.photo) ? <Image src={baseURL + candidateData.photo} roundedCircle className={styles.profilePhoto} /> : ""}
                            {((!candidateData.photo) && candidateData.gender === "FEMALE") ?
                                <Image src={default_female_photo} roundedCircle className={styles.profilePhoto} />
                                :
                                ""
                            }
                            {((!candidateData.photo) && candidateData.gender === "MALE") ?
                                <Image src={default_male_photo} roundedCircle className={styles.profilePhoto} />
                                :
                                ""
                            }


                        </Col>





                    </Row>
                    <div className={styles.InfoDiv}>
                        <p className={styles.nameSurname}>{candidateData.firstName + " " + candidateData.surname}</p>
                        <p>{candidateData.currentPosition}</p>

                        <p>{candidateData.email}</p>
                        <p>{candidateData.phone}</p>
                        <p>{candidateData.postcode}</p>
                        <p>{candidateData.town + ", " + candidateData.city}</p>

                    </div>



                </Container>



            </div>

        </div>
    );
}

export default Profile;