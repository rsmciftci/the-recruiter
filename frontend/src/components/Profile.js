import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Table from "react-bootstrap/esm/Table";
import { FaPencilAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import styles from './Profile.module.css'
import { openProfileEdit } from "../redux/profileSlice";

import Image from 'react-bootstrap/Image';

function Profile() {

    const dispatch = useDispatch()


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
                                <td className={styles.nameSurname}>Rasim CHIFTCHI</td>
                            </tr>
                            <tr>
                                <td>Java Developer</td>
                            </tr>
                            <tr>
                                <td>CV</td>
                            </tr>
                            <tr>
                                <td>rsmchiftchi@gmail.com</td>
                            </tr>
                            <tr>
                                <td>07565391538</td>
                            </tr>
                            <tr>
                                <td>E15 1UB</td>
                            </tr>
                            <tr>
                                <td>Stratford, London</td>
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