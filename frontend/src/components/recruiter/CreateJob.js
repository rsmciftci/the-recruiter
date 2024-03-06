import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from 'react-bootstrap/Form';
import styles from './CreateJob.module.css'
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import {  useSelector } from "react-redux";
import jobService from "../../services/JobService";

function CreateJob() {

    const recruiter = useSelector(state => state.data.recruiterSlice);


    const [job, setJob] = useState({
        recruiter: recruiter.id,
        company: recruiter.company

    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJob({ ...job, [name]: value });
    };

    function saveJob() {

        jobService.addJob(job)
            .then(response => {
                alert("added")
            })
            .catch(error => {
                alert(error)
            });


    }







    return (
        <div className={styles.mainDiv}>
            {console.log(job)}
            <div style={{ display: 'flex' }}>
                <FloatingLabel
                    controlId="title"
                    label="Title"
                    className="mb-2"
                    style={{ flex: 1, marginRight: '10px' }}
                >
                    <Form.Control type="text" name="title" onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingSelect" label="Job Type"
                    style={{ flex: 1, marginLeft: '10px' }}
                >
                    <Form.Select aria-label="Floating label select example" name="job_type" onChange={handleChange} >
                        <option></option>
                        <option value="Remote">Remote</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="On Site">On Site</option>
                    </Form.Select>
                </FloatingLabel>
                <FloatingLabel
                    controlId="salary"
                    label="Salary"
                    className="mb-3"
                    style={{ flex: 1, marginRight: '10px', marginLeft: '10px' }}
                >
                    <Form.Control
                        type="text"
                        name="salary"
                        onChange={handleChange}
                    />
                </FloatingLabel>
                <FloatingLabel
                    controlId="city"
                    label="City"
                    className="mb-3"
                    style={{ flex: 1, marginLeft: '10px' }}
                >
                    <Form.Control
                        type="text"
                        name="city"
                        onChange={handleChange}
                    />
                </FloatingLabel>
            </div>

            <FloatingLabel controlId="definition" label="Job Description">
                <Form.Control
                    as="textarea"
                    style={{ height: '500px', marginBottom: '10px' }}
                    name="definition"
                    onChange={handleChange}
                />
            </FloatingLabel>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="secondary" onClick={() => saveJob()}>Create Job</Button>
            </div>




        </div>
    );

}
export default CreateJob;