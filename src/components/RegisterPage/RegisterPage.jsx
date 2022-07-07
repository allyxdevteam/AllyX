import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

function RegisterPage() {

  return (
    <div sx={{overflow:'scroll'}}>
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;
