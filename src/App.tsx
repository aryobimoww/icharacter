import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { RouterProvider, createBrowserRouter, Routes, Route } from 'react-router-dom';
import Characters from './components/characters';

const router = createBrowserRouter([
  { path: "*", element: <Root /> }
])
function App() {
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

function Root() {
  return (
    <Routes>
      <Route path='/' element={<Characters />} />
      <Route path='/:id' element={<Characters />} />
    </Routes>
  )
}

export default App;
