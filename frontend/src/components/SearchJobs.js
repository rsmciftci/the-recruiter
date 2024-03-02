import Table from 'react-bootstrap/Table';
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import styles from './SearchJobs.module.css'
import Pagination from 'react-bootstrap/Pagination';

function SearchJobs() {

  // TODO: return last 270 job application

  let active = 2;
  let items = [];
  for (let number = 1; number <= 18; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }



  return (
    <div>
      <div className={styles.mainDiv}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Company</th>
              <th>Role</th>
              <th>Location</th>
              <></>
              <th className={styles.apply}>Apply</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Plentific</td>
              <td><a href='url'>Python Developer</a></td>
              <td>London</td>
              <td className={styles.apply}><IoMdCheckmarkCircleOutline color='green' size={20} /></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Monzo</td>
              <td><a href='url'>Tech Lead</a></td>
              <td>Amsterdam</td>
              <td className={styles.apply}><IoMdCheckmarkCircleOutline color='green' size={20} /></td>
            </tr>
            <tr>
              <td>3</td>
              <td>King</td>
              <td><a href='url'>Senior Java Developer</a></td>
              <td>Dublin</td>
              <td className={styles.apply}><IoMdCheckmarkCircleOutline color='green' size={20} /></td>
            </tr>
            <tr>
              <td>1</td>
              <td>Plentific</td>
              <td><a href='url'>Python Developer</a></td>
              <td>London</td>
              <td className={styles.apply}><IoMdCheckmarkCircleOutline color='green' size={20} /></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Monzo</td>
              <td><a href='url'>Tech Lead</a></td>
              <td>Amsterdam</td>
              <td className={styles.apply}><IoMdCheckmarkCircleOutline color='green' size={20} /></td>
            </tr>
            <tr>
              <td>3</td>
              <td>King</td>
              <td><a href='url'>Senior Java Developer</a></td>
              <td>Dublin</td>
              <td className={styles.apply}><IoMdCheckmarkCircleOutline color='green' size={20} /></td>
            </tr>
            <tr>
              <td>1</td>
              <td>Plentific</td>
              <td><a href='url'>Python Developer</a></td>
              <td>London</td>
              <td className={styles.apply}><IoMdCheckmarkCircleOutline color='green' size={20} /></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Monzo</td>
              <td><a href='url'>Tech Lead</a></td>
              <td>Amsterdam</td>
              <td className={styles.apply}><IoMdCheckmarkCircleOutline color='green' size={20} /></td>
            </tr>
            <tr>
              <td>3</td>
              <td>King</td>
              <td><a href='url'>Senior Java Developer</a></td>
              <td>Dublin</td>
              <td className={styles.apply}><IoMdCheckmarkCircleOutline color='green' size={20} /></td>
            </tr>
            <tr>
              <td>1</td>
              <td>Plentific</td>
              <td><a href='url'>Python Developer</a></td>
              <td>London</td>
              <td className={styles.apply}><IoMdCheckmarkCircleOutline color='green' size={20} /></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Monzo</td>
              <td><a href='url'>Tech Lead</a></td>
              <td>Amsterdam</td>
              <td className={styles.apply}><IoMdCheckmarkCircleOutline color='green' size={20} /></td>
            </tr>
            <tr>
              <td>3</td>
              <td>King</td>
              <td><a href='url'>Senior Java Developer</a></td>
              <td>Dublin</td>
              <td className={styles.apply}><IoMdCheckmarkCircleOutline color='green' size={20} /></td>
            </tr>
            <tr>
              <td>1</td>
              <td>Plentific</td>
              <td><a href='url'>Python Developer</a></td>
              <td>London</td>
              <td className={styles.apply}><IoMdCheckmarkCircleOutline color='green' size={20} /></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Monzo</td>
              <td><a href='url'>Tech Lead</a></td>
              <td>Amsterdam</td>
              <td className={styles.apply}><IoMdCheckmarkCircleOutline color='green' size={20} /></td>
            </tr>
            <tr>
              <td>3</td>
              <td>King</td>
              <td><a href='url'>Senior Java Developer</a></td>
              <td>Dublin</td>
              <td className={styles.apply}><IoMdCheckmarkCircleOutline color='green' size={20} /></td>
            </tr>



          </tbody>
        </Table>
      </div>
      <div className={styles.paginationDiv}>
        <Pagination size="lg">{items}</Pagination>
      </div>
    </div>
  );
}

export default SearchJobs;