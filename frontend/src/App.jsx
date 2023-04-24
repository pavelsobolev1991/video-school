import React, { useEffect } from 'react';
import Main from './Pages/Main/Main';

function App() {
  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((res) => res);
  });
  return <Main />;
}

export default App;
