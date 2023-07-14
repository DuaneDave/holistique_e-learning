"use client";

import { useState, useContext } from "react";
import Link from "next/link";

import { AuthContext } from "@/store/authContext";

import styles from "./header.module.css";

function Dropdown({ ...props }) {
  const { logout, setEditProfileVisibility } = useContext(AuthContext);

  const handleLogout = () => {
    props.setshow(false);
    logout();
  };

  const handleProfileClick = () => {
    props.setshow(false);
    setEditProfileVisibility(true);
  };

  return (
    <div className={`flex flex-col gap ${styles.dropdown}`} {...props}>
      <p onClick={handleProfileClick}>My Profile</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dropdown;
