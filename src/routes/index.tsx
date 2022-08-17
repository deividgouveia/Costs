import { Routes, Route } from 'react-router-dom';
import Company from '../pages/Company';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import NewProject from '../pages/NewProject';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/company" element={<Company />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/newproject" element={<NewProject />} />
    </Routes>
  );
}

export default MainRoutes;
