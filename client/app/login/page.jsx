import React from 'react';

import AuthLayout from '@/component/auth/authLayout';
import LoginForm from '@/component/auth/loginForm';

function pages() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}

export default pages;
