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
import { default_female_photo, default_male_photo } from "../redux/candidateSlice";
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
                            {(candidateData.photo) ? <Image src={candidateData.base_url + candidateData.photo} roundedCircle className={styles.profilePhoto} /> : ""}
                            {(!candidateData.photo && candidateData.gender == "female") ?
                                <Image src={default_female_photo} roundedCircle className={styles.profilePhoto} />
                                :
                                <Image src={default_male_photo} roundedCircle className={styles.profilePhoto} />
                            }
                
                        </Col>
                        <Table>
                            <tr>
                                <td className={styles.nameSurname}>{candidateData.firstName + " " + candidateData.surname}</td>
                            </tr>
                            <tr>
                                <td>{candidateData.currentPosition}</td>
                            </tr>
                            <tr>
                                <td>{candidateData.cv ? "CV" : "Please Upload Your CV"}</td>
                            </tr>
                            <tr>
                                <td>{candidateData.email}</td>
                            </tr>
                            <tr>
                                <td>{candidateData.phone}</td>
                            </tr>
                            <tr>
                                <td>{candidateData.postcode}</td>
                            </tr>
                            <tr>
                                <td>{candidateData.town + ", " + candidateData.city}</td>
                            </tr>
                        </Table>

                    </Row>
                </Container>
                <Container>
                </Container>


            </div>

        </div>
    );
}

export default Profile;