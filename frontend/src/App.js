import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TheFooter from './components/TheFooter';
import TheNavbar from './components/TheNavbar';
import Home from './components/Home';
import Profile from './components/Profile';

function App() {
  


  return (

    <Router>
      <TheNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <TheFooter />
    </Router>
  )
}

export default App;
