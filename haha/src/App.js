import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SetFavicon from './components/SetFavicon';
import Header from './components/header/Header';
import { Section2 } from './components/section2/Section2';
import { About } from './components/about/About';
import { Resume } from './components/resume/Resume'; // Thêm component Resume (cần tạo mới)
import { Work } from './components/work/Work';
import { Contact } from './components/contact/Contact';
import { Work1 } from './components/work1/Work1';
import { DetailWork } from './components/DetailWork/DetailWork';

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
              <Route path='blog' element={<Work />} />
              <Route path='work' element={<Work1 />} />
              <Route path='contact' element={<Contact />} />
            </Route>
          </Route>
          <Route path='/detailWork' element={<DetailWork />} />

          
        </Routes>
      </Router>
    </>
  );
}

export default App;
