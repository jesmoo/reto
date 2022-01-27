import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../Container/Layout';
import MainHome from '../Container/MainHome';
import '../Styles/App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<MainHome />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
