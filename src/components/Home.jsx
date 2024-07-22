// Home.js
import React from 'react';
import { useAuth } from './AuthProvider';


const Home = () => {
  const { user, logout } = useAuth();
  

  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
