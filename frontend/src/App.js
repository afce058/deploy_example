import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [service1Ep1, setService1Ep1] = useState({});
  const [service1Ep2, setService1Ep2] = useState({});
  const [service2Ep1, setService2Ep1] = useState({});
  const [service2Ep2, setService2Ep2] = useState({});

  useEffect(() => {
    // Llamada a Service 1
    axios.get(`${process.env.REACT_APP_BASE_SERVICE1}/service1/api/endpoint1`)
      .then(response => {
        setService1Ep1(response.data);
      })
      .catch(error => {
        console.error('Hubo un error en Service 1:', error);
      });

    axios.get(`${process.env.REACT_APP_BASE_SERVICE1}/service1/api/endpoint2`)
      .then(response => {
        setService1Ep2(response.data);
      })
      .catch(error => {
        console.error('Hubo un error en Service 1 (endpoint 2):', error);
      });

    // Llamada a Service 2
    axios.get(`${process.env.REACT_APP_BASE_SERVICE2}/service2/api/endpoint1`)
      .then(response => {
        setService2Ep1(response.data);
      })
      .catch(error => {
        console.error('Hubo un error en Service 2:', error);
      });

    axios.get(`${process.env.REACT_APP_BASE_SERVICE2}/service2/api/endpoint2`)
      .then(response => {
        setService2Ep2(response.data);
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
        <p>{service1Ep1.message || 'Cargando...'}</p>
        <p>{service1Ep2.message || 'Cargando...'}</p>
      </div>
      <div>
        <h2>Service 2</h2>
        <p>{service2Ep1.message || 'Cargando...'}</p>
        <p>{service2Ep2.message || 'Cargando...'}</p>
      </div>
    </div>
  );
}

export default App;