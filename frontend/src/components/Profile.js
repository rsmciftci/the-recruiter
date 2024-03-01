import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Table from "react-bootstrap/esm/Table";
import { FaPencilAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import styles from './Profile.module.css'
import { openProfileEdit } from "../redux/profileSlice";

import Image from 'react-bootstrap/Image';

function Profile() {

    const dispatch = useDispatch()
    const candidateData = useSelector(state => state.data.candidateData);

    return (

        <div>
                       
            <div className={styles.border}>
                <Container>
                
                    <FaPencilAlt className={styles.editButton} onClick={() => dispatch(openProfileEdit())}  />
                    <Row>

                        <Col>
                            <Image src="profile.png" roundedCircle className={styles.profilePhoto} />
                        </Col>
                        <Table>
                            <tr>
                                <td className={styles.nameSurname}>{candidateData.firstName + " " + candidateData.surname}</td>
                            </tr>
                            <tr>
                                <td>{candidateData.currentPosition}</td>
                            </tr>
                            <tr>
                                <td>CV Link</td>
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