"use client";

import { useState, useContext } from "react";
import Link from "next/link";

import { AuthContext } from "@/store/authContext";

import styles from "./header.module.css";
import ProfileModal from "../ui/ProfileModal";

function Dropdown({ ...props }) {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    props.setshow(false);
    logout();
  };

  const handleProfileOpen = () => {
     props.setopenmodal(true);
  }

  if (!props.openModal) {
    document.body.classList.toggle("no-scroll");
  }

  return (
    <div className={`flex flex-col gap ${styles.dropdown}`} {...props}>
      <p onClick={handleProfileOpen}>My Profile</p>
      {props.openmodal ? <ProfileModal setshow={props.setshow} openmodal={props.openmodal} setopenmodal={props.setopenmodal} /> : ''}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dropdown;
