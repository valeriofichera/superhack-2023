import React from 'react';
import github_logo from '/Users/valeriofichera/Documents/GitHub/superhack-2023/optimism/src/assets/Github.svg';

function Github() {
  function handleLogin() {
    const clientId = 'f4e28833abb0a968a476';
    const redirectUri = encodeURIComponent('http://localhost:5173/attest/callback');
    const scope = 'user:email'; // Requested scope

    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
  }

  return (
<div className='flex justify-center'>
  <a onClick={handleLogin}>
    <div className="w-fit justify-center items-center gap-5 flex flex-row p-3 m-1 bg-slate-800 rounded-xl font-lg text-white hover:bg-slate-500 cursor-pointer">
      <img src={github_logo} alt="" />
      <div>Connect with Github</div>
    </div>
  </a>
</div>


  );
}

export default Github;
