import HouseComponent from './componentandprops';
import Deliverables from './deliverables';
import ArtCompetition from './artCompetition';
import Playground from './usestate';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <Router>
      <div className='router-container'>
        <div className='container-sidebar'>
          <Link to="/" className='sidebar-btn'>Home</Link>
          <Link to="/ArtCompetition" className='sidebar-btn'>Art Competition</Link>
          <Link to="Playground" className='sidebar-btn'>Playground</Link>
          <Link to="Deliverables" className='sidebar-btn'>Deliverables</Link>
        </div>
        <Routes>
          <Route path="/" element={<HouseComponent />} />
          <Route path="/ArtCompetition" element={<ArtCompetition />} />
          <Route path="Playground" element={<Playground />} />
          <Route path="Deliverables" element={<Deliverables />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
