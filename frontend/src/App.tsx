import React, { useEffect, useState } from 'react';
import { setEnvironmentData } from 'worker_threads';

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch('/api')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  // console.log(data.message);
  return <div className="App"></div>;
}

export default App;
