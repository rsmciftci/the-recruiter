import { useDispatch, useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import RecruiterProfile from "./RecruiterProfile";
import RecruiterProfileEdit from "./RecruiterProfileEdit";

function RecruiterPage() {

    const dispatch = useDispatch()
    const isProfileEditOpen = useSelector(state => state.profilePage.isProfileEditOpen);



    return (
        <div>
            {isProfileEditOpen ? <RecruiterProfileEdit /> : <RecruiterProfile />}       

        </div>
    );
}

export default RecruiterPage;