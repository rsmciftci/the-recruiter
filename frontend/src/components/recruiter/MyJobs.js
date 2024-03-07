import Table from "react-bootstrap/esm/Table";
import styles from './MyJobs.module.css'
import Pagination from 'react-bootstrap/Pagination';
import { useEffect, useState } from "react";
import jobService from "../../services/JobService";
import { useDispatch, useSelector } from 'react-redux'
import { setJobs } from "./../../redux/jobsSlice"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function MyJobs() {





    const recruiter = useSelector(state => state.data.recruiterSlice)
    const jobs = useSelector(state => state.data.jobsSlice.jobs)
    const dispatch = useDispatch()


    const numberOfItemsPerPage = 15;
    const [activePage, setActivePage] = useState(1);
    const maxPage = Math.ceil(jobs.length / numberOfItemsPerPage)

    const [show, setShow] = useState(false);
    const [job, setJob] = useState("");

    const handleClose = () => setShow(false);
    function handleShow (job) {

        setJob(job);
        setShow(true);
    }

    function increasePage(input) {
        ((activePage < maxPage)) ? setActivePage(activePage + 1) : setActivePage(activePage);
    }

    function decreasePage(input) {
        ((activePage > 1)) ? setActivePage(activePage - 1) : setActivePage(activePage);
    }




    useEffect(() => {

        jobService.findJobsByRecruiter(recruiter.id).then(response => {
            dispatch(setJobs(response.data))

        }
        ).catch(error => {
            //  TODO: throw Error here
        })

    }, [dispatch, recruiter.id]);



    return (
        <div>
            <Table striped bordered hover className={styles.tablecss}>
                <thead>

                    <tr>
                        <th>#</th>
                        <th>Job Title</th>
                        <th>Location</th>
                        <th>Job Type</th>
                        <th className={styles.action}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jobs.slice((activePage * numberOfItemsPerPage - numberOfItemsPerPage), (activePage * numberOfItemsPerPage)).map((job, index) => (
                            <tr>
                                <td>{activePage * numberOfItemsPerPage - numberOfItemsPerPage + index + 1}</td>
                                <td><a className={styles.jobTitle} onClick={() => handleShow(job)}>{job.title}</a></td>
                                <td>{job.city}</td>
                                <td>{job.job_type}</td>
                                <td className={styles.action}><a href={"/recruiter/myjobs/job/candidates/" + index }>Show Candidates</a></td>
                            </tr>


                        ))

                    }




                </tbody>

                <Modal size="xl" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{job.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {"Salary : "+job.salary }
                        <br></br>
                        {"Date : "+job.publish_date}
                        <br></br>
                        {"Location : "+job.city}
                        <br></br>
                        {"Job Type : "+job.job_type}
                    
                    </Modal.Body>
                    <Modal.Body>{job.definition}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>



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

export default MyJobs;