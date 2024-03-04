import Table from 'react-bootstrap/Table';
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import styles from './SearchJobs.module.css'
import { useParams } from 'react-router-dom';
import jobService from '../services/JobService'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Pagination from 'react-bootstrap/Pagination';

function SearchJobs() {

  let { title } = useParams()
  const [jobs, setJobs] = useState([""])
  const candidate = useSelector(state => state.data.candidateData);
  const jobSearchText = useSelector(state => state.data.jobSearchSlice.jobSearchText);



  const numberOfItemsPerPage = 15;

  const [activePage, setActivePage] = useState(1);
  const maxPage = Math.ceil(jobs.length / numberOfItemsPerPage)

  function increasePage(input) {
    ((activePage < maxPage)) ? setActivePage(activePage + 1) : setActivePage(activePage);
  }

  function decreasePage(input) {
    ((activePage > 1)) ? setActivePage(activePage - 1) : setActivePage(activePage);
  }

  function removeAppliedJob(data, job_id) {

    const filterJobs = data.filter(data => {

      return !(data.id == job_id)
    });

    setJobs(filterJobs)


  }

  function applyTheJob(job_id) {
    console.log(job_id)
    jobService.appJob(job_id, candidate.id)
      .then(response => {

        removeAppliedJob(jobs, job_id)

      })
      .catch(error => {
        // TODO: toast
      });
    
  }




  useEffect(() => {
    jobService.findJobsByTitle(jobSearchText).then(response => {

      const filterJobs = response.data.filter(data => {

        return !data.candidate.includes(candidate.id)
      });

      setJobs(filterJobs)

    }
    ).catch(error => {
      //  TODO: throw Error here
      console.log("error")
    })

  }, []);


  return (
    <div>
      <div className={styles.mainDiv}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Company</th>
              <th>Role</th>
              <th>Salary</th>
              <th>Location</th>
              <th>Job Type</th>
              <th className={styles.applyColumn}>Apply</th>
            </tr>
          </thead>
          <tbody>
            {jobs.slice((activePage * numberOfItemsPerPage - numberOfItemsPerPage), (activePage * numberOfItemsPerPage)).map((item, index) => (
              <tr>
                <td>{activePage * numberOfItemsPerPage - numberOfItemsPerPage + index + 1}</td>
                <td>{item.company}</td>
                <td><a href={"job/"+item.id+"/apply"}>{item.title}</a></td>
                <td>{item.salary}</td>
                <td>{item.city}</td>
                <td>{item.job_type}</td>
                <td className={styles.applyColumn}><IoMdCheckmarkCircleOutline color='green' onClick={() => applyTheJob(item.id)} size={20} /></td>
              </tr>
            ))}


          </tbody>
        </Table>
      </div>
      <div className={styles.paginationDiv}>
        <Pagination>
          <Pagination.First onClick={() => setActivePage(1)} />
          <Pagination.Prev onClick={() => decreasePage()} />
          <Pagination.Item active>{activePage}</Pagination.Item>
          <Pagination.Next onClick={() => increasePage()} />
          <Pagination.Last onClick={() => setActivePage(maxPage)} />
        </Pagination>
      </div>
    </div>
  );
}

export default SearchJobs;