import {  useSelector } from 'react-redux';
import CreateNewCandidate from './CreateNewCandidate'

function NewCandidate() {
    const candidateData = useSelector(state => state.data.candidateData)

    function redirectToHomePage() {
        // Change the URL to the homepage URL
        window.location.href = "/";
    }
    return (
       <div>
        {candidateData.login ? redirectToHomePage() : <CreateNewCandidate /> }
       </div>
    );
}

export default NewCandidate;