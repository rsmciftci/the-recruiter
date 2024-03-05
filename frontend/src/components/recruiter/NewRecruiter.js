import {  useSelector } from 'react-redux';
import CreateNewRecruiter from './CreateNewRecruiter';

function NewRecruiter() {
    const recruiterData = useSelector(state => state.data.recruiterSlice)

    function redirectToHomePage() {
        // Change the URL to the homepage URL
        window.location.href = "http://localhost:3000/recruiter";
    }
    return (
       <div>
        {recruiterData.login ? redirectToHomePage() : <CreateNewRecruiter /> }
   
       </div>
    );
}

export default NewRecruiter;