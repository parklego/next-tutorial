"use client";
import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const links = [
  {
    id: 0,
    title: "Home",
    url: "/",
  },
  ,
  {
    id: 1,
    title: "About",
    url: "/about",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 5,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session = useSession();

  return (
    <div className={styles.container}>
      <Link className={styles.logo} href={"/"}>
        parklego
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} className={styles.link} href={link.url}>
            {link.title}
          </Link>
        ))}

        {session.status === "authenticated" && (
          <button
            onClick={signOut}
            style={{
              color: "#53c28b",
              background: "transparent",
              border: "1px solid #53c28b",
              borderRadius: "5px",
              padding: "4px",
            }}
          >
            logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
