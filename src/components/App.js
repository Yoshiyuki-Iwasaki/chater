import React, { useState } from 'react';

import SignIn from './SignIn.js'

export default () => {
  const [name, setName] = useState('');
  // console.log({ name });
  return <SignIn setName={setName} />;
};
