import { useDispatch, useSelector } from "react-redux";
import Recruiter from './Recruiter'
import RecruiterLogin from './RecruiterLogin'

function RecruiterPage() {

    const recruiterData = useSelector(state => state.data.recruiterSlice);

    return (

        <div>
           { recruiterData.login ? <Recruiter/> : <RecruiterLogin/>}
        </div>
    );
}

export default RecruiterPage;