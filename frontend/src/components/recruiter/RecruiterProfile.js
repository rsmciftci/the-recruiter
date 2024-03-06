import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { FaPencilAlt } from "react-icons/fa";
import styles from './RecruiterProfile.module.css'
import { useDispatch, useSelector } from "react-redux";
import { openProfileEdit } from "../../redux/profileSlice";

function RecruiterProfile() {

    const dispatch = useDispatch();
    const recruiter = useSelector(state => state.data.recruiterSlice);


    return (
        <div>
            <div className={styles.border}>
                <Container>

                    <FaPencilAlt className={styles.editButton} onClick={() => dispatch(openProfileEdit())} />
                    <Row>
                    
                    </Row>
                    <div className={styles.InfoDiv}>
                        <p className={styles.nameSurname}>{recruiter.first_name + " " + recruiter.surname}</p>   
                        <p>{recruiter.company}</p>                  
                        <p>{recruiter.email}</p>
                        <p>{recruiter.phone}</p>
                        <p>{recruiter.postcode}</p>
                    </div>


                </Container>



            </div>

        </div>
    );
}

export default RecruiterProfile;