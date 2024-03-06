import { useSelector } from "react-redux";
import RecruiterLogin from './RecruiterLogin'
import RecruiterPage from "./RecruiterPage";

function RecruiterHome() {

    const recruiterData = useSelector(state => state.data.recruiterSlice);

    return (

        <div>
           { recruiterData.login ? <RecruiterPage/> : <RecruiterLogin/>}
        </div>
    );
}

export default RecruiterHome;