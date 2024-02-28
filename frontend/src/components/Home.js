import {  useSelector } from 'react-redux';
import HomeLogout from './HomeLogout';

function Home() {
    const data = useSelector(state => state.data)
    console.log(data.value)

    return (
       <div>
        {!data.value ? <HomeLogout/> : ""}
       </div>
    );
}

export default Home;