import {  useSelector } from 'react-redux';
import HomeLogout from './HomeLogout';

function Home() {
    const candidateData = useSelector(state => state.data.candidateData)
    const recruiterData = useSelector(state => state.data.recruiterSlice)

    function redirectToRecruiterPage() {
        window.location.href="http://localhost:3000/recruiter"
    }
    return (
       <div>
        {( !candidateData.login && !recruiterData.login ) ? <HomeLogout/> : "" }
        {( recruiterData.login ) ? redirectToRecruiterPage(): "" }
       </div>
    );
}

export default Home;