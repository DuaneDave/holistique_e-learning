'use client';

import { createContext, useState } from 'react';
import { useRouter } from 'next/navigation';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const signup = async (payload, callback) => {
    try {
      const response = await fetch('http://localhost:4000/api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.status !== 400) {
        callback(false);
        router.push('/login');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async (data, rememberMe, callback) => {
    try {
      const response = await fetch('http://localhost:4000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();

      if (res.status === 400) {
        throw new Error(res.message);
      }
  
      if (rememberMe) {
        localStorage.setItem('auth', JSON.stringify(data));
      }
      
      setUser(data);
      callback(false);
      router.push('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    try {
      await fetch('http://localhost:4000/api/user/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setUser(null);
    } catch (error) {
      console.log(error.message);
    }
  };

  const value = {
    user,
    signup,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
