import Table from 'react-bootstrap/Table';
import { MdCancel } from "react-icons/md";
import Pagination from 'react-bootstrap/Pagination';
import candidateService from '../services/CandidateService';
import { useDispatch, useSelector } from 'react-redux';
import {  setAppliedJobs } from '../redux/appliedJobsSlice';
import {  useEffect, useState } from 'react';
import styles from './AppliedJobs.module.css'

function AppliedJobs() {

  const candidate = useSelector(state => state.data.candidateData);
  const appliedJobs = useSelector(state => state.appliedJobs.appliedJobList);
  const dispatch = useDispatch()
  const numberOfItemsPerPage = 15;

  const [activePage, setActivePage ] = useState(1);
  const maxPage = Math.ceil(appliedJobs.length/numberOfItemsPerPage)

  function increasePage(input){
    ((activePage < maxPage)) ? setActivePage(activePage + 1) : setActivePage(activePage);           
  }

  function decreasePage(input){
    ((activePage > 1)) ? setActivePage(activePage - 1) : setActivePage(activePage);           
  }


  useEffect(() => {
    candidateService.findAppliedJobs(candidate.id).then(response => {
      dispatch(setAppliedJobs(response.data))
    }
    ).catch(error => {
      //  TODO: throw Error here
    })

  }, []);

  return (
    <div>
      {console.log(appliedJobs.length / 15)}
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
            </tr>
          </thead>
          <tbody>
            {appliedJobs.slice((activePage * numberOfItemsPerPage - numberOfItemsPerPage ), (activePage * numberOfItemsPerPage)).map((item, index) => (
              <tr>
                <td>{activePage * numberOfItemsPerPage - numberOfItemsPerPage + index + 1}</td>
                <td>{item.company}</td>
                <td><a href={"job/" + item.id + "/applied"}>{item.title}</a></td>
                <td>{item.salary}</td>
                <td>{item.city}</td>
                <td>{item.job_type}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className={styles.paginationDiv}>
        <Pagination>
          <Pagination.First  onClick={() => setActivePage(1)} />
          <Pagination.Prev  onClick={() =>decreasePage()} />
          <Pagination.Item active>{activePage}</Pagination.Item>
          <Pagination.Next onClick={() =>increasePage()}/>
          <Pagination.Last onClick={() => setActivePage(maxPage)} />
        </Pagination>
      </div>
    </div>
  );
}

export default AppliedJobs;