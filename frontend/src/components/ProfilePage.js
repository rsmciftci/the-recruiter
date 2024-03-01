import { useSelector } from 'react-redux';
import ProfileEdit from './ProfileEdit';
import Profile from './Profile';

function ProfilePage() {
    const profileData = useSelector(state => state.profilePage)

    return (

        <div>
           {profileData.isProfileEditOpen ? <ProfileEdit/> : <Profile/>}
        </div>
    );
}

export default ProfilePage;