import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from 'react-bootstrap/Form';
import styles from './CreateJob.module.css'
import Button from 'react-bootstrap/Button';

function CreateJob() {
    return (
        <div className={styles.mainDiv}>
            <div style={{ display: 'flex' }}>
                <FloatingLabel
                    controlId="title"
                    label="Title"
                    className="mb-2"
                    style={{ flex: 1, marginRight: '10px' }}
                >
                    <Form.Control type="text" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingSelect" label="Job Type"
                    style={{ flex: 1, marginLeft: '10px' }}
                >
                    <Form.Select aria-label="Floating label select example">
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
                    />
                </FloatingLabel>
            </div>

            <FloatingLabel controlId="definition" label="Job Description">
                <Form.Control
                    as="textarea"
                    style={{ height: '100px', marginBottom: '10px' }}
                />
            </FloatingLabel>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="secondary">Create Job</Button>
            </div>




        </div>
    );

}
export default CreateJob;