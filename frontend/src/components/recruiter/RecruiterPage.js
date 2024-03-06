import { useDispatch, useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import RecruiterProfile from "./RecruiterProfile";

function RecruiterPage() {

    const dispatch = useDispatch()
    const isProfileEditOpen = useSelector(state => state.profilePage.isProfileEditOpen);



    return (
        <div>
            {isProfileEditOpen ? "acik" : <RecruiterProfile />}       

        </div>
    );
}

export default RecruiterPage;