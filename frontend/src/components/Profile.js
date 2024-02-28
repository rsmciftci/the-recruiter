import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
function Profile() {


    const candidateData = useSelector(state => state.candidateData)
    return (

        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        {console.log("PROFILE")}
                        {console.log(candidateData.login)}
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>

        </div>
    );
}

export default Profile;