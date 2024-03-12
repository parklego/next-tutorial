import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

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
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href={"/"}>
        parklego
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} className={styles.link} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
