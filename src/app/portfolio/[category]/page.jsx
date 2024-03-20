import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Category = ({ params }) => {
  return (
    <div>
      <h1 className={styles.categoryTitle}>{params.category} detail</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>pariatur</h1>
          <p className={styles.desc}>
            Elit proident eiusmod cupidatat velit eu cillum qui consequat.
          </p>
        </div>
        <div className={styles.imgContent}>
          <Image
            fill={true}
            src={
              "https://img.freepik.com/free-photo/3d-rendering-people-avatars-zoom-call_23-2149576736.jpg?t=st=1710966350~exp=1710969950~hmac=426d2d5bd7f96593ab7c340f08a094ef5f5dc6f648983c73d168ec87fbcc9f15&w=2000"
            }
            alt=""
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>mollit</h1>
          <p className={styles.desc}>
            In nostrud laborum eiusmod exercitation.
          </p>
        </div>
        <div className={styles.imgContent}>
          <Image
            fill={true}
            src={
              "https://img.freepik.com/premium-photo/data-analysis-computer-3d-rendering_72104-4312.jpg?w=2000"
            }
            alt=""
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>cillum</h1>
          <p className={styles.desc}>
            Aliqua deserunt sint sit est incididunt veniam id velit ipsum
            occaecat ex adipisicing eiusmod occaecat.
          </p>
        </div>
        <div className={styles.imgContent}>
          <Image
            fill={true}
            src={
              "https://img.freepik.com/premium-photo/egg-fantastic-composition-theme-easter-egg-fantastic-composition-theme-easter-3d-rendering_105538-1121.jpg?w=2000"
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
