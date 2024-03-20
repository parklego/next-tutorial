import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

const Blog = () => {
  return (
    <div className={styles.container}>
      <Link href={"/blog/test1"} className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Nostrud laborum aute aliquip irure proident.
          </h1>
          <p className={styles.desc}>
            Pariatur aute ex fugiat exercitation mollit consequat. Voluptate
            nulla culpa officia. In cillum ex commodo sint mollit fugiat enim
            mollit cupidatat magna. In minim ipsum non cillum do amet nisi
            incididunt commodo elit deserunt enim minim pariatur.
          </p>
        </div>
        <div className={styles.imgContent}>
          <Image
            width={250}
            height={250}
            src={
              "https://img.freepik.com/free-photo/view-adorable-3d-cat_23-2150473728.jpg?t=st=1710967934~exp=1710971534~hmac=94d6f73aabafd5f8889a6778c74455826eaecbcec458b39331cc5cae97062785&w=2000"
            }
            alt=""
          />
        </div>
      </Link>
      <Link href={"/blog/test2"} className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Est amet do ea elit.</h1>
          <p className={styles.desc}>
            Pariatur elit est nisi velit. Irure sit velit amet aliquip deserunt
            anim nostrud tempor. Laborum esse mollit qui consequat fugiat
            consectetur est. Culpa magna id consectetur magna qui excepteur qui
            magna sit nostrud cillum pariatur duis sint. Fugiat incididunt
            consequat aute amet consequat dolore quis minim labore aliquip
            laboris laboris. Cupidatat nulla esse Lorem.
          </p>
        </div>
        <div className={styles.imgContent}>
          <Image
            width={250}
            height={250}
            src={
              "https://img.freepik.com/free-photo/view-adorable-3d-cat_23-2150473716.jpg?t=st=1710967957~exp=1710971557~hmac=97f20f73b01046c07e2809f13b6de51723353e28518bbc9be2b54d90ae67114e&w=2000"
            }
            alt=""
          />
        </div>
      </Link>
      <Link href={"/blog/test3"} className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Sit laborum nulla nisi quis ad.</h1>
          <p className={styles.desc}>
            Est nisi voluptate occaecat quis incididunt consectetur.
            Exercitation voluptate irure laboris qui ut voluptate velit sit
            ullamco occaecat in deserunt sit consequat aute. Minim do nostrud
            cillum est voluptate anim. Amet nostrud laboris dolor do esse.{" "}
          </p>
        </div>
        <div className={styles.imgContent}>
          <Image
            width={250}
            height={250}
            src={
              "https://img.freepik.com/free-photo/3d-view-adorable-pet-cat_23-2150473285.jpg?t=st=1710967978~exp=1710971578~hmac=4f583b41367000cc7ca67ef6d3091127f2ec79ca93feb79390dc558d96b3421d&w=1480"
            }
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};

export default Blog;
