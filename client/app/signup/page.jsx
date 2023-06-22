import React from 'react';

import AuthLayout from '@/component/auth/authLayout';
import SignupForm from '@/component/auth/signinForm';

function SignUp() {
  return (
    <AuthLayout>
      <SignupForm />
    </AuthLayout>
  );
}

export default SignUp;
