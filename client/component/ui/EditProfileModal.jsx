import { useContext, useState } from "react";

import Image from "next/image";

import arrow from "../../public/assets/icons/arrowleft (2).svg";
import sign from "../../public/assets/icons/material-symbols_done.png";
import avatar from "../../public/assets/icons/emptyavatar.png";
import upload from "../../public/assets/icons/Vector (1).svg";
import styles from "./ui.module.css";

import { AuthContext } from "@/store/authContext";

function EditProfileModal({ setopenmodal }) {
  const { logout, editProfile, loggedInUser } = useContext(AuthContext);
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [formValues, setFormValues] = useState(loggedInUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    editProfile(formValues, setFormValues);
  };
  
  const handleImageChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  return (
    <div className={`flex center flex-col ${styles.profilecontainer}`}>
      <div className="flex flex-col full-width center">
        <form onSubmit={handleSubmit} className="full-width flex flex-col">
          <div className="flex flex-col center">
            <div className={`flex ${styles.profileheading}`}>
              <button
                className={`flex center ${styles.backarrowbutton}`}
                aria-label="exit profile edit"
              >
                <Image
                  className={`${styles.backarrow}`}
                  src={arrow}
                  alt="exit profile edit"
                  onClick={() => setopenmodal(false)}
                />
              </button>
              <h2 className="flex">Edit Profile</h2>
              <button type="submit" className={styles.checkoutprofile}>
                <Image
                  className={` ${styles.checkoutimage}`}
                  src={sign}
                  alt="submit profile info"
                />
              </button>
            </div>

            <div className={styles.uploadImages}>
              <div>
                {image.preview ? (
                  <>
                    <Image
                      styles={`flex circle ${styles.uploadimage}`}
                      src={image.preview}
                      alt="preview"
                      width={90}
                      height={90}
                    />
                    <button className={styles.uploadbutton} type="button">
                      <label htmlFor="upload-button">
                        <Image
                          className={`flex circle ${styles.upload}`}
                          src={upload}
                          alt="upload-image"
                        />
                      </label>
                    </button>
                  </>
                ) : (
                  <>
                    <Image
                      className={styles.avatar}
                      src={avatar}
                      width={100}
                      height={100}
                      alt="avatar"
                    />
                    <button className={styles.uploadbutton} type="button">
                      <label htmlFor="upload-button">
                        <Image
                          className={`flex circle ${styles.upload}`}
                          src={upload}
                          alt="upload-image"
                        />
                      </label>
                    </button>
                  </>
                )}
              </div>
              <div>
                <input
                  style={{ display: "none", marginLeft: "-30px" }}
                  accept="image*"
                  name="profile_image"
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
                name="firstName"
                onChange={(e)=> setFormValues((prev)=> ({...prev, [e.target.name]: e.target.value}))}
                type="text"
                value={formValues?.firstName ?? ''}
                placeholder=""
              />
            </div>
            <div className="flex flex-col">
              <label>last name</label>
              <input
                className={styles.input}
                name="lastName"
                onChange={(e)=> setFormValues((prev)=> ({...prev, [e.target.name]: e.target.value}))}
                type="text"
                value={formValues?.lastName ?? ''}
                placeholder=""
              />
            </div>
            <div className="flex flex-col">
              <label>Phone Number</label>
              <input
                className={styles.input}
                name="phone"
                type="text"
                onChange={(e)=> setFormValues((prev)=> ({...prev, [e.target.name]: e.target.value}))}
                value={formValues?.phone ?? ''}
                placeholder=""
              />
            </div>
            <div className="flex flex-col">
              <label>Email</label>
              <input
                className={styles.input}
                name="email"
                onChange={(e)=> setFormValues((prev)=> ( {...prev, [e.target.name]: e.target.value}))}
                value={formValues?.email ?? ''}
                type="email"
                placeholder=""
              />
            </div>
            <div className="flex flex-col">
              <label>Change password</label>
              <input
                className={styles.input}
                name="password"
                onChange={(e)=> setFormValues((prev)=> ({...prev, [e.target.name]: e.target.value}))}
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

export default EditProfileModal;
