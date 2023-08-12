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
        const response = await fetch(`https://api.github.com/user/repos`, {
          headers: {
            Authorization: `Bearer ${code}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setRepos(data);
        } else {
          console.error('Error fetching user repos:', response.statusText);
          setError('An error occurred while fetching user repos.');
        }
      } catch (error) {
        console.error('Error fetching user repos:', error);
        setError('An error occurred while fetching user repos.');
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

