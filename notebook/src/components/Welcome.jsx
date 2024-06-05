import React from 'react';

const Welcome = ({ user }) => {
  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      {/* Additional user information if needed */}
    </div>
  );
};

export default Welcome;
