import React from 'react';

function Github() {
  function handleLogin() {
    const clientId = 'f4e28833abb0a968a476';
    const redirectUri = encodeURIComponent('http://localhost:5173/callback');
    const scope = 'user:email'; // Requested scope

    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
  }

  return <button onClick={handleLogin}>Connect to GitHub</button>;
}

export default Github;
