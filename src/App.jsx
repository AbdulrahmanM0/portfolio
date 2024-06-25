import React, { useEffect, useState } from 'react'
import Home from './assets/Home'

function App() {
  const [ip, setIp] = useState('');

  useEffect(() => {
    // Fetch the client's IP address
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        const ip = data.ip;
        setIp(ip);
        // Post the IP address to Firebase Realtime Database
        postIpToFirebase(ip);
      })
      .catch(error => {
        console.error('Error fetching IP address:', error);
      });
  }, []);

  const postIpToFirebase = (ip) => {
    fetch('https://get-data-141b2-default-rtdb.firebaseio.com/ips.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ip }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Successfully posted IP to Firebase:', data);
    })
    .catch(error => {
      console.error('Error posting IP to Firebase:', error);
    });
  };

  return (
    <>
     <Home/>
    </>
  )
}

export default App