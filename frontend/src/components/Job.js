import styles from './Job.module.css'
import { IoLocationSharp } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";
import { HiBuildingLibrary } from "react-icons/hi2";
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import { useEffect, useState } from 'react';
import jobService from '../services/JobService';
import { useSelector } from 'react-redux';
function Job() {

    const { jobId, action } = useParams();
    const [job, setJob] = useState([]);
    const [jobAplied, setJobApplied] = useState(false);
    const candidate = useSelector(state => state.data.candidateData);


    useEffect(() => {
        jobService.findJobById(jobId).then(response => {

            setJob(response.data)

        }
        ).catch(error => {

        })

    }, []);

    function applyTheJob(job_id) {

        jobService.appJob(job_id, candidate.id)
          .then(response => {
    
            setJobApplied(true)
                // TODO : toast succesfully applied
          })
          .catch(error => {
                 // TODO : toast sthng went wrong
          });
        
      }

    return (
        <div className={styles.div1}>


            <gap></gap>
            <div className={styles.div2}>

                <h2>{job.title}</h2>

                <div>
                    <IoLocationSharp size={25} /> <text>{job.city}</text>

                </div>
                <div>
                    <GiMoneyStack size={25} />  <text>{job.salary}</text>
                </div>
                <div>
                    <HiBuildingLibrary size={25} /> <text>{job.company}</text>
                </div>
                <hr></hr>

                <div>

                    <p>{job.definition}</p>

                </div>

                <hr></hr>
                <div className={styles.centerApplyButton}>
                    {((action === "apply") && !jobAplied)? <Button variant="secondary" onClick={() => applyTheJob(job.id)}>Apply</Button> : ""}
                </div>



            </div>
            <gap></gap>
            <gap></gap>

        </div>
    );
}

export default Job;