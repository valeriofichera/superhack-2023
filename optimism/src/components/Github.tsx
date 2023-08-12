import { OAuthProvider, useOAuth } from 'react-oauth/github';

const GithubButton = () => {
  const { isAuthenticated, user, login, logout } = useOAuth();

  return (
    <div>
      {isAuthenticated ? (
        <>
          <h1>Welcome, {user.login}!</h1>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Connect to GitHub</button>
      )}
    </div>
  );
};

const Github = () => (
  <OAuthProvider clientId="f4e28833abb0a968a476" redirectUri="http://localhost:5173/callback">
    <GithubButton />
  </OAuthProvider>
);

export default Github;
