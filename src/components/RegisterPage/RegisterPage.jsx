import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

function RegisterPage() {
  const history = useHistory();

  return (
    <div sx={{overflow:'hidden'}}>
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;
