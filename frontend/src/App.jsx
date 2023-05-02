import React, { useEffect } from 'react';
import { Switch, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main/Main';
import ServicePage from './Pages/ServicePage/ServicePage';

function App() {
  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((res) => res);
  });

  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/uslugi" element={<ServicePage title={"Услуги"}/>} /> 
    </Routes>
  );
}

export default App;