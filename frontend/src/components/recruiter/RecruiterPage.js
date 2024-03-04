import Recruiter from "./Recruiter";
import RecruiterLogin from "./RecruiterLogin";

function RecruiterPage() {
    const isLoggedin = false
    return (

        <div>
           {isLoggedin ? <Recruiter/> : <RecruiterLogin/>}
        </div>
    );
}

export default RecruiterPage;