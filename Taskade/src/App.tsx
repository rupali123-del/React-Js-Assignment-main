import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './Pages/Home/Home';
import TaskCreation from './Pages/TaskCreation/TaskCreation';
import PageNotFound from './Pages/PageNotFound/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Write the Route for all component, Home and Task Creation also create one for Page not found and redirect every irrelevant path to that page */}
        <Route path='/' element={<HomePage />} />
        <Route path='/add-new-task' element={<TaskCreation />} />
        <Route path='/page-not-found' element={<PageNotFound/>} />
        <Route path='*' element={<Navigate to="/page-not-found" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
