import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/path/to/data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Lista imena i prezimena</h1>
      <ul>
        {data.map(osoba=> (
          <li key={osoba.id}>
            {osoba.ime} {osoba.prezime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;