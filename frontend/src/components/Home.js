import {  useSelector } from 'react-redux';
import HomeLogout from './HomeLogout';

function Home() {
    const candidateData = useSelector(state => state.candidateData)
    return (
       <div>
        {candidateData.login ? "" : <HomeLogout/> }
       </div>
    );
}

export default Home;