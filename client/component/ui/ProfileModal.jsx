import React, { useContext, useEffect, useState } from "react";

import Image from "next/image";

import arrow from "../../public/assets/icons/arrowleft (2).svg";
import sign from "../../public/assets/icons/material-symbols_done.png";
import avatar from "../../public/assets/icons/avatar.png";
import upload from "../../public/assets/icons/Vector (1).svg";
import styles from "./ui.module.css";

import { AuthContext } from "@/store/authContext";

function ProfileModal({ openmodal, setopenmodal, setshow }) {
  const { logout, user } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [image, setImage] = useState({preview: "", raw: ""});

  const data = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    password: ''
  }
  const [profileData, setProfileData] = useState(data);

  const handleProfileCLose = () => {
    setopenmodal(false);
    setshow(false);
    console.log(openmodal);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };


  const handleImageChange = (e) => {
     console.log('hello');
     if(e.target.files.length){
     setImage({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0],
     })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:4000/api/users/edit-profile/${user.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(profileData),
        }
      );

      const res = await response.json();
      

      if (res.status === 200) {
        setMessage('file updated');
      }
    } catch (err) {
      setMessage(err);
      console.log(err);
    }
  };

  return (
    <div className={`flex center flex-col ${styles.profilecontainer}`}>
      <div className="flex flex-col center">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex flex-col center">
            <div className={`flex ${styles.profileheading}`}>
              <Image src={arrow} alt="arrow" onClick={handleProfileCLose}/>
              <h2>Edit Profile</h2>
              <button type="submit" className={styles.checkoutprofile}>
                <Image className={styles.goodsign} src={sign} alt="good_sign" />
              </button>
            </div>

            <div className={styles.uploadImages}>
              <div>
             {image.preview ? (<>
             <Image styles={`flex circle ${styles.uploadimage}`} src={image.preview} alt='preview' width={80} height={80} /><button className={styles.uploadbutton} type="button">
                  <label htmlFor="upload-button">
                    <Image
                      className={`flex circle ${styles.upload}`}
                      src={upload}
                      alt="upload-image" />
                  </label>

                </button></>) :
              (
              <>
            
              <Image className={styles.avatar} src={avatar} alt="avatar" />
              <button className={styles.uploadbutton} type="button">
            <label htmlFor="upload-button">
                  <Image
                    className={`flex circle ${styles.upload}`}
                    src={upload}
                    alt="upload-image" />
              </label>

                </button>

                </>
              )
              }
              </div>
              <div>
                <input
                  style={{  display: "none", marginLeft: "-30px" }}
                  accept="image*"
                  id="upload-button"
                  type="file"
                  onChange={handleImageChange}
                /> 
              </div>
            </div>

          </div>
          <div className={`flex flex-col gap ${styles.modalForm}`}>
            <div className="flex flex-col">
              <label>First Name</label>
              <input
                className={styles.input}
                name="first_name"
                onChange={handleInput}
                type="text"
                placeholder=""
              />
            </div>
            <div className="flex flex-col">
              <label>last name</label>
              <input
                className={styles.input}
                name="last_name"
                onChange={handleInput}
                type="text"
                placeholder=""
              />
            </div>
            <div className="flex flex-col">
              <label>Phone Number</label>
              <input
                className={styles.input}
                name="phone_number"
                onChange={handleInput}
                type="tel"
                placeholder=""
              />
            </div>
            <div className="flex flex-col">
              <label>Email</label>
              <input
                className={styles.input}
                name="email"
                onChange={handleInput}
                type="email"
                placeholder=""
              />
            </div>
            <div className="flex flex-col">
              <label>Change password</label>
              <input
                className={styles.input}
                name="password"
                onChange={handleInput}
                type="password"
                placeholder=""
              />
            </div>
          </div>
        </form>
        <button className={styles.formlogout} onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfileModal;
