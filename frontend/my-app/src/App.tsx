import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from './components/pages/landing/Landing';
import Registration from './components/pages/Register/Registration';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Register" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
