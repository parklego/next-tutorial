import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

const BlogPost = () => {
  return (
    <div>
      <div href={"/blog/test1"} className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Nostrud laborum aute aliquip irure proident.
          </h1>
          <p className={styles.desc}>
            Pariatur aute ex fugiat exercitation mollit consequat. Voluptate
            nulla culpa officia. In cillum ex commodo sint mollit fugiat enim
            mollit cupidatat magna. In minim ipsum non cillum do amet nisi
            incididunt commodo elit deserunt enim minim pariatur. Aliquip in
            minim officia deserunt elit nulla non Lorem incididunt aute veniam.
            Incididunt cupidatat aliqua aliquip qui cupidatat excepteur sint
            nisi aliqua consequat laboris id adipisicing in.
            <br />
            <br />
            Ipsum Lorem adipisicing laboris dolor id magna nostrud ea labore
            adipisicing cupidatat consectetur occaecat quis aliqua. Nostrud amet
            officia id qui officia ex nostrud eiusmod duis. Ad excepteur laboris
            dolore commodo non nulla veniam ut laboris labore consectetur magna
            exercitation. Magna mollit eu laborum excepteur sunt. Dolor Lorem
            exercitation quis eiusmod occaecat ea enim aute sunt sint nisi
            nostrud ea qui ea. Ad laborum excepteur eu veniam aliquip labore
            cillum Lorem ipsum est. Ut laborum ut minim sunt nulla exercitation
            proident pariatur aute fugiat ex officia consectetur.
            <br />
            <br />
            Aliquip in eiusmod duis sit dolore aliqua nisi voluptate consequat
            quis anim excepteur dolor aliqua. Et ullamco officia reprehenderit
            aliquip veniam incididunt magna mollit eiusmod Lorem veniam nisi
            quis id. Irure laborum mollit do esse ut ex laborum consequat ut
            eiusmod id qui et. Lorem veniam adipisicing sunt enim laborum ipsum
            est veniam deserunt cupidatat est eiusmod ea aliqua eu. Ad
            consectetur amet quis.
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
      </div>
    </div>
  );
};

export default BlogPost;
