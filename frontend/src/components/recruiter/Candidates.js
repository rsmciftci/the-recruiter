import { useState } from "react";
import Table from "react-bootstrap/esm/Table";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from './Candidates.module.css'
import { baseURL } from "../../redux/candidateSlice";
import Pagination from 'react-bootstrap/Pagination';

function Candidates() {

    const { index } = useParams();
    const candidates = useSelector(state => state.data.jobsSlice.jobs[index].candidate)

    const numberOfItemsPerPage = 15;
    const [activePage, setActivePage] = useState(1);
    const maxPage = Math.ceil(candidates.length / numberOfItemsPerPage)

    function increasePage(input) {
        ((activePage < maxPage)) ? setActivePage(activePage + 1) : setActivePage(activePage);
    }

    function decreasePage(input) {
        ((activePage > 1)) ? setActivePage(activePage - 1) : setActivePage(activePage);
    }


    return (
        <div>
            <Table striped bordered hover className={styles.tablecss}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Full Name</th>
                        <th>Current Position</th>
                        <th>City</th>
                        <th className={styles.cv}>CV</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        candidates.slice((activePage * numberOfItemsPerPage - numberOfItemsPerPage), (activePage * numberOfItemsPerPage)).map((candidate, index) => (
                            <tr key={index}>
                                <td >{activePage * numberOfItemsPerPage - numberOfItemsPerPage + index + 1}</td>
                                <td >{candidate.first_name + " " + candidate.surname}</td>
                                <td>{candidate.current_position}</td>
                                <td>{candidate.city}</td>

                                <td className={styles.cv} > <a href={baseURL + candidate.cv} target="_blank">CV</a> </td>
                                {console.log(candidate)}
                            </tr>


                        ))

                    }

                </tbody>


            </Table>
            <Pagination className={styles.pagination}>
                <Pagination.First onClick={() => setActivePage(1)} />
                <Pagination.Prev onClick={() => decreasePage()} />
                <Pagination.Item active>{activePage}</Pagination.Item>
                <Pagination.Next onClick={() => increasePage()} />
                <Pagination.Last onClick={() => setActivePage(maxPage)} />
            </Pagination>
        </div>
    );

}

export default Candidates;