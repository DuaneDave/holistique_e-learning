"use client";

import { useState, useContext } from "react";

import { AuthContext } from "@/store/authContext";
import EditProfileModal from '../ui/EditProfileModal';

function EditProfile() {

  const {editProfileVisibility, setEditProfileVisibility} = useContext(AuthContext);
  
  if (editProfileVisibility) {
    document.body.classList.add("no-scroll");
  } else{
    document.body.classList.remove("no-scroll");
  }

  return (
    <>
      {editProfileVisibility && (
        <EditProfileModal
          openmodal={editProfileVisibility}
          setopenmodal={setEditProfileVisibility}
        />
      )}
    </>
  );
}

export default EditProfile;
