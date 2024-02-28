import {  useSelector } from 'react-redux';
import HomeLogout from './HomeLogout';
import Test from'./Test';

function Home() {
    const candidateData = useSelector(state => state.candidateData)
    return (
       <div>
        {localStorage.getItem("loggedin") ? "" : <HomeLogout/> }
       </div>
    );
}

export default Home;