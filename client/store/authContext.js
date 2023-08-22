'use client';

import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [editProfileVisibility, setEditProfileVisibility] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) setUser(user);

    const getLoggedInUser = async () => {
      try {
        const response = await fetch(
          `https://holistique-e-learning.onrender.com/api/user/currentUser/${user.id}}`,
          {
            method: 'GET',
            credentials: 'include',
          }
        );

        const res = await response.json();
        if (res.status === 200) {
          console.log(res)
          setLoggedInUser(res);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getLoggedInUser();
  }, []);

  const subscribe = async (payload) => {
    try {
      const response = await fetch(
        'https://holistique-e-learning.onrender.com/api/newsletter/subscribe',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify(payload),
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const editProfile = async (payload, callback) => {
    try {
      const response = await fetch(
        `https://holistique-e-learning.onrender.com/api/user/edit-profile/${loggedInUser.id}`,
        {
          method: 'PUT',
          credentials: 'include',
          body: payload,
        }
      );
      console.log(response);

      if (response.status === 200) {
        callback({});
      }
    } catch (err) {
      console.log(err);
    }
  };

  const signup = async (payload, callback) => {
    try {
      const response = await fetch(
        'https://holistique-e-learning.onrender.com/api/user/signup',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

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
      const response = await fetch('https://holistique-e-learning.onrender.com/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include',
      });

      const res = await response.json();

      if (res.status === 400) throw new Error(res.message);

      if (rememberMe) {
        localStorage.setItem('auth', JSON.stringify(data));
      } else {
        if (JSON.parse(localStorage.getItem('auth'))) {
          localStorage.removeItem('auth');
        }
      }

      localStorage.setItem('user', JSON.stringify(res));

      setUser(res);
      callback(false);
      router.push('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    try {
      await fetch(
        'https://holistique-e-learning.onrender.com/api/user/logout',
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

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
    editProfileVisibility,
    loggedInUser,
    subscribe,
    setEditProfileVisibility,
    editProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
