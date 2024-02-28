import {  useSelector } from 'react-redux';
import HomeLogout from './HomeLogout';

function Home() {
    const data = useSelector(state => state.data)

    return (
       <div>
        {!data.login ? <HomeLogout/> : ""}
       </div>
    );
}

export default Home;