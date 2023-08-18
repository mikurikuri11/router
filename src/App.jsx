import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './components/Home';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page1DetailA from './components/Page1DetailA';
import Page1DetailB from './components/Page1DetailB';

import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />}>
          <Route path="detailA" element={<Page1DetailA />} />
          <Route path="detailB" element={<Page1DetailB />} />
        </Route>
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </Router>
  );
};

export default App;
