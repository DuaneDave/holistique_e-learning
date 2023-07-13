'use client';

import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) setUser(user);
  }, []);

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
        credentials: 'include',
      });

      const res = await response.json();

      if (res.status === 400) {
        throw new Error(res.message);
      }

      if (rememberMe) {
        localStorage.setItem('auth', JSON.stringify(data));
      } else {
        if (JSON.parse(localStorage.getItem('auth'))) {
          localStorage.removeItem('auth');
        }

        setUser(data);
        callback(false);
        router.push('/');
        return;
      }

      localStorage.setItem('user', JSON.stringify(res));

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
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      localStorage.removeItem('user');
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
