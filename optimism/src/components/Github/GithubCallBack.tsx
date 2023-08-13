import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function GithubCallback() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get('code');

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUserRepos() {
      setLoading(true);
      setError(null);

      try {
        // Send a POST request to your backend to exchange the code for an access token
        const response = await fetch(`/api/callback?code=${code}`);
        const { access_token } = await response.json();

        // Now that we have the access token, make a request for user repositories
        const reposResponse = await fetch(
          `/api/user/repos`,
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );

        if (reposResponse.ok) {
          const data = await reposResponse.json();
          setRepos(data);
        } else {
          console.error('Error fetching user repos:', reposResponse.statusText);
          setError('An error occurred while fetching user repos.');
        }
      } catch (error) {
        console.error('Error fetching user repos:', error);
        setError('✅Successfully connected with GitHub');
      } finally {
        setLoading(false);
      }
    }

    if (code) {
      fetchUserRepos();
    }
  }, [code]);

  return (
    <div>
      <h2>User Repositories</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GithubCallback;