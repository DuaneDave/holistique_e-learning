import React, {useContext, useState} from 'react';

import Image from 'next/image';

import arrow from '../../public/assets/icons/arrowleft (2).svg';
import sign from '../../public/assets/icons/material-symbols_done.png';
import avatar from '../../public/assets/icons/avatar.png';
import upload from '../../public/assets/icons/Vector (1).svg';
import styles from './ui.module.css';

import { AuthContext } from "@/store/authContext";


function ProfileModal({openModal,setOpenModal,  setShow}) {
  const [imageUpload, setImageUpload] = useState([]);
  const {logout} = useContext(AuthContext);

  const handleProfileCLose = () => {
    setOpenModal(false);
    setShow(false);
    console.log(openModal);
  }

  const handleImageUpload = () => {
    console.log('hello');
  }

  return (
    <div className={`flex center ${styles.profilecontainer}`}>
      <div className='flex flex-col'>
        <div className='flex flex-col center'>
      <div className={`flex ${styles.profileheading}`}>
       <Image src={arrow} 
       alt="arrow"/>
       <h2>Edit Profile</h2>
       <Image onClick={handleProfileCLose} src={sign} alt="good_sign"/>
      </div>
      <div className={styles.uploadImages}>
      <Image className={styles.avatar} src={avatar} alt="avatar"/>
       <div>
        <input
         style={{display:"none"}}
          accept='image*'
           type='file'
         />
         <label aria-label='image upload' htmlFor='choose-file'>
         <Image 
          onChange={handleImageUpload}
          className={`flex circle ${styles.upload}`}  src={upload} alt="upload-image"/>
         </label>
      </div>
      </div>
      </div>
      <form className={`flex flex-col gap ${styles.modalForm}`}> 
      <div className='flex flex-col'>
      <label>First Name</label>
        <input
         className={styles.input}
         name="First name"
         type="text"
         placeholder=""
        />
        </div>
      <div className='flex flex-col'>
      <label>last name</label>
           <input
         className={styles.input}
         name="Last name"
         type="text"
         placeholder=""
        />
        </div>
      <div className='flex flex-col'>
        <label>Phone Number</label>
           <input
         className={styles.input}
         name="Phone Number"
         type="tel"
         placeholder=""
        />
        </div>
      <div className='flex flex-col'>
        <label>Email</label>
           <input
         className={styles.input}
         name="email"
         type="email"
         placeholder=""
        />
        </div>
      <div className='flex flex-col'>
        <label>Change password</label>
           <input
         className={styles.input}
         name="password"
         type="password"
         placeholder=""
        />
        </div>
        <button type='submit'>Logout</button>
      </form>
    </div>
    </div>
  )
}

export default ProfileModal