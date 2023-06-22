import React from 'react';

import AuthLayout from '@/component/auth/authLayout';
import SigninForm from '@/component/auth/signinForm';

function SignIn() {
  return (
    <AuthLayout>
      <SigninForm />
    </AuthLayout>
  );
}

export default SignIn;
