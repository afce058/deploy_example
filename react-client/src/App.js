import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [service1Data, setService1Data] = useState({});
  const [service2Data, setService2Data] = useState({});

  useEffect(() => {
    // Llamada a Service 1
    axios.get('http://localhost:5001/api/endpoint1')
      .then(response => {
        setService1Data(response.data);
      })
      .catch(error => {
        console.error('Hubo un error en Service 1:', error);
      });

    axios.get('http://localhost:5001/api/endpoint2')
      .then(response => {
        setService1Data(prevData => ({
          ...prevData,
          endpoint2: response.data
        }));
      })
      .catch(error => {
        console.error('Hubo un error en Service 1 (endpoint 2):', error);
      });

    // Llamada a Service 2
    axios.get('http://localhost:5002/api/endpoint1')
      .then(response => {
        setService2Data(response.data);
      })
      .catch(error => {
        console.error('Hubo un error en Service 2:', error);
      });

    axios.get('http://localhost:5002/api/endpoint2')
      .then(response => {
        setService2Data(prevData => ({
          ...prevData,
          endpoint2: response.data
        }));
      })
      .catch(error => {
        console.error('Hubo un error en Service 2 (endpoint 2):', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Microservicios Node.js</h1>
      <div>
        <h2>Service 1</h2>
        <p>{service1Data.message || 'Cargando...'}</p>
        <p>{service1Data.endpoint2 ? service1Data.endpoint2.message : 'Cargando...'}</p>
      </div>
      <div>
        <h2>Service 2</h2>
        <p>{service2Data.message || 'Cargando...'}</p>
        <p>{service2Data.endpoint2 ? service2Data.endpoint2.message : 'Cargando...'}</p>
      </div>
    </div>
  );
}

export default App;