import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/post/${id}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("fetch data error");
  }

  return res.json();
};

export const generateMetadata = async ({ params }) => {
  const post = await getData(params.id);

  return {
    title: post.title,
    description: post.desc,
  };
};

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
        </div>
        <div className={styles.imgContent}>
          <Image width={250} height={250} src={data.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
