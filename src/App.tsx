import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import Details from './pages/Details';
import Not_Found from './pages/NotFound';


function App() {
  return( 
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/logements/:id' element={<Details />} />
        <Route path='*' element={<Not_Found />} />
      </Routes>
    </Router>
  );
}

export default App