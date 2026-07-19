import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import HomePage from './module/feature/home/HomePage';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import { defaultResume } from './components/resumeData';
import './App.css';

function App() {
  const [resumeData, setResumeData] = useState(defaultResume);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<ResumeForm data={resumeData} setData={setResumeData} />} />
          <Route path="/preview" element={<ResumePreview data={resumeData} setData={setResumeData} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
