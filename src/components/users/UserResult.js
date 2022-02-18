import React, { useState } from 'react';
import { useEffect } from 'react';
const UserResult = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(process.env.REACT_APP_GITHUB_URL);
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
    const data = await res.json();
    setUsers(data);
    setLoading(false);
  };
  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <h1>{user.login}</h1>
        ))}
      </div>
    );
  } else {
    return <h3>Loading...</h3>;
  }
};

export default UserResult;
