import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TheFooter from './components/TheFooter';
import TheNavbar from './components/TheNavbar';
import Home from './components/Home';
import AppliedJobs from './components/AppliedJobs';
import ProfilePage from './components/ProfilePage';
import SearchJobs from './components/SearchJobs'
import Job from './components/Job';
import NewCandidate from './components/NewCandidate'
import NewRecruiter from './components/recruiter/NewRecruiter'
import RecruiterHome from './components/recruiter/RecruiterHome';
import CreateJob from './components/recruiter/CreateJob';
import MyJobs from './components/recruiter/MyJobs';
import Candidates from './components/recruiter/Candidates';
import SearchCandidates from './components/recruiter/SearchCandidates';

function App() {
  


  return (

    <Router>
      <TheNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/applied-jobs' element={<AppliedJobs />} />
        <Route path='/search-jobs/' element={<SearchJobs />} />
        <Route path='/job/:jobId/:action' element={<Job />} />
        <Route path='/new-candidate' element={<NewCandidate />} />
        <Route path='/recruiter' element={<RecruiterHome />} />
        <Route path='recruiter/create-job' element={<CreateJob/>} />
        <Route path='recruiter/candidates/:jobTitle' element={<SearchCandidates/>} />
        <Route path='/recruiter/new-recruiter' element={<NewRecruiter />} />
        <Route path='/recruiter/myjobs/job/candidates/:index' element={<Candidates />} />
        <Route path='/recruiter/myjobs' element={<MyJobs />} />
      </Routes>
      <TheFooter />
    </Router>
  )
}

export default App;
