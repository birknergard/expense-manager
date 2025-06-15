import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/Main';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <Main />
          }></Route>

          <Route path='*' element={
            <div>Not found</div>
          }></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;
