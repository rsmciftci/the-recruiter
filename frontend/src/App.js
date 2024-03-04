import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TheFooter from './components/TheFooter';
import TheNavbar from './components/TheNavbar';
import Home from './components/Home';
import AppliedJobs from './components/AppliedJobs';
import ProfilePage from './components/ProfilePage';
import SearchJobs from './components/SearchJobs'
import Job from './components/Job';
import NewCandidate from './components/NewCandidate'
import RecruiterPage from './components/RecruiterPage';

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
        <Route path='/recruiter' element={<RecruiterPage />} />
      </Routes>
      <TheFooter />
    </Router>
  )
}

export default App;
