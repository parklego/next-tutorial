import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>2024 parklego. All rights reseved.</div>
      <div className={styles.social}>
        <Image
          className={styles.icon}
          src="/facebook.png"
          width={20}
          height={20}
          alt="sns account"
        />
        <Image
          className={styles.icon}
          src="/instagram.png"
          width={20}
          height={20}
          alt="sns account"
        />
        <Image
          className={styles.icon}
          src="/twitter.png"
          width={20}
          height={20}
          alt="sns account"
        />
        <Image
          className={styles.icon}
          src="/youtube.png"
          width={20}
          height={20}
          alt="sns account"
        />
      </div>
    </div>
  );
};

export default Footer;
