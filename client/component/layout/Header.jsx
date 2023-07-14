"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { AuthContext } from "@/store/authContext";
import Dropdown from "./Dropdown";

import logo from "../../public/assets/logo.png";
import avatar from "../../public/assets/icons/avatar.png";
import arrowDown from "../../public/assets/icons/chevron down.png";

import styles from "./header.module.css";
import EditProfile from "../layout/EditProfile";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const {user} = useContext(AuthContext);

  const path = usePathname();

  const handleClick = () => {
    setShow(!show);
  };

  if (path === "/login" || path === "/signup" || path === "/faq") {
    return null;
  }

  return (
    <>
      <header
        className={`full-width ${styles.navigation} ${
          path === "/project-background" ||
          path === "/resources" ||
          path.includes("/courses") ||
          path === "/community"
            ? styles.navBg
            : ""
        }`}
      >
        <nav className={`flex align-y full-width container`}>
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>

          <div className={`flex align-y ${styles.navigationInfo}`}>
            <ul className={`flex gap ${isOpen ? styles.toggleNav : ""}`}>
              <li>
                <Link
                  href="/"
                  className={`${path === "/" ? styles.active : ""}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/project-background"
                  className={`${
                    path === "/project-background" ? styles.active : ""
                  }`}
                >
                  Project Background
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className={`${path === "/resources" ? styles.active : ""}`}
                >
                  Resource Center
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className={`${
                    path.includes("/courses") ? styles.active : ""
                  }`}
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className={`${path === "/community" ? styles.active : ""}`}
                >
                  Community
                </Link>
              </li>
            </ul>

            {user && (
              <span className={`flex center ${styles.user}`}>
                <Image src={avatar} width={30} height={30} alt="current user" />
                <button className="flex align-y" onClick={handleClick}>
                  <p>John Doe</p>

                  <Image src={arrowDown} alt="arrow down" />
                </button>
                {show && <Dropdown setshow={setShow} />}
              </span>
            )}

            {!user && (
              <div className={`flex center gap ${styles.auth}`}>
                <Link href="/login">Login</Link>
                <Link href="/signup">Sign Up</Link>
              </div>
            )}

            <button
              className={styles.hamburger}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </header>
        <EditProfile />
    </>
  );
}

export default Header;
