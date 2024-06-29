import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SetFavicon from './components/SetFavicon';
import Header from './components/header/Header';
import { Section2 } from './components/section2/Section2';
import { About } from './components/about/About';
import { Resume } from './components/resume/Resume'; // Thêm component Resume (cần tạo mới)

function App() {
  return (
    <>
      <SetFavicon />
      <Router>
        <Routes>
          <Route path='/testGithubPageReact' element={<Header />}>
            <Route path='' element={<Section2 />}>
              <Route index element={<About />} />
              <Route path='resume' element={<Resume />} />
              {/* Các tuyến đường khác */}
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
