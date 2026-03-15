import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './module/feature/home/HomePage';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import './App.css';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<ResumeForm />} />
          <Route path="/preview" element={<ResumePreview />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
