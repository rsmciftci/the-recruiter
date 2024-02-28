import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TheFooter from './components/TheFooter';
import TheNavbar from './components/TheNavbar';
import Home from './components/Home';

function App() {
  return (

    <Router>
      <TheNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <TheFooter />
    </Router>
  )
}

export default App;
