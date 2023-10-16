import React from 'react';

const User = () => {
  const firstName = '李莉';
  const lastName = '小王';

  return (
    <div>
      <h2>用户信息</h2>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
    </div>
  );
};
export default User;
