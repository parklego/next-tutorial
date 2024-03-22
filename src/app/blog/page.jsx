import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
  title: "parklego blog",
  description: "parklego next tutorial",
};

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/post", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("fetch data error");
  }

  return res.json();
};

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      {data.map((item, idx) => (
        <div key={idx}>
          <Link href={`/blog/${item._id}`} className={styles.item}>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
            </div>
            <div className={styles.imgContent}>
              <Image width={250} height={250} src={item.image} alt="" />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
