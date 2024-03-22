import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

export const metadata = {
  title: "parklego contact",
  description: "parklego next tutorial",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Irure dolore ipsum proident culpa anim.</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src={"/contact.png"}
            alt=""
            fill={true}
            className={styles.img}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.input}
            placeholder="message"
            cols={30}
            rows={10}
          />

          <Button url="#" text="send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
