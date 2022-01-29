import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../container/Layout';
import MainHome from '../container/MainHome';
import MainPhone from '../container/MainPhone';

import '../Styles/App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<MainHome />} />
          <Route exact path="/:id/phone" element={<MainPhone />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
