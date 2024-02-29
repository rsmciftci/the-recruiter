import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import styles from './Profile.module.css'
import { FaPencilAlt } from "react-icons/fa";

function Profile() {


    const candidateData = useSelector(state => state.candidateData)
    return (

        <div className={styles.border}>
            <Container>
            <FaPencilAlt className={styles.editButton} onClick={() => console.log("edit")}/>
                <Row>
                   
                    <Col>
                        <Image src="profile.png" roundedCircle className={styles.profilePhoto}/>
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

        </div>
    );
}

export default Profile;