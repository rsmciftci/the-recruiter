import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TheNavbar from './components/TheNavbar';
import TheFooter from './components/TheFooter';

function App() {
  return (
    <Router>
        <TheNavbar/>
      <Routes>

      </Routes>
      <TheFooter/>
    </Router>
  )
}

export default App;
