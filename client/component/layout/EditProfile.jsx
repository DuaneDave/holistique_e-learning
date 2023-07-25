'use client';

import { useEffect, useContext } from 'react';

import { AuthContext } from '@/store/authContext';
import EditProfileModal from '../ui/EditProfileModal';

function EditProfile() {
  const { editProfileVisibility, setEditProfileVisibility } =
    useContext(AuthContext);

  useEffect(() => {
    if (editProfileVisibility) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [editProfileVisibility]);

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
