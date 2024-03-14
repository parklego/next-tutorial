import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          fill={true}
          src={
            "https://ksr-ugc.imgix.net/assets/027/236/165/d887e87fc5b9d3980c72f33b57d3b599_original.png?ixlib=rb-4.1.0&crop=faces&w=1552&h=873&fit=crop&v=1573910710&auto=format&frame=1&q=92&s=3191336d272cee01c8738d2ce7997b3d"
          }
          alt=""
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>
            Laborum elit do culpa amet cupidatat tempor ullamco elit.
          </h1>
          <h2 className={styles.imgDesc}>
            Quis eiusmod aliqua ex Lorem Lorem qui ipsum voluptate est culpa
            aliqua ea nisi.
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1>
            Adipisicing esse qui elit do incididunt commodo excepteur elit est
            nulla.
          </h1>
          <h2 className={styles.desc}>
            Nulla ex culpa adipisicing eu ullamco. Ea laboris pariatur est
            incididunt pariatur mollit. Nisi irure eiusmod deserunt ut officia
            in proident ullamco exercitation ut consectetur.
            <br />
            <br />
            Enim consectetur culpa culpa labore ullamco ad Lorem qui ipsum ut
            anim duis voluptate. Quis amet aute ut nulla pariatur id voluptate
            ullamco duis deserunt velit commodo. Mollit ullamco anim labore id
            elit esse cillum duis. Commodo incididunt enim anim irure ipsum
            irure anim nostrud et cillum consequat id minim. Amet nisi
            exercitation proident dolor anim sint sint est aute culpa.
          </h2>
        </div>
        <div className={styles.item}>
          <h1>Reprehenderit sit deserunt esse magna ut ipsum deserunt.</h1>
          <h2 className={styles.desc}>
            Lorem adipisicing nulla reprehenderit velit duis anim. Consequat
            officia ipsum officia proident ex Lorem. Eiusmod mollit occaecat qui
            reprehenderit fugiat dolor voluptate nostrud laborum cupidatat duis.
            Duis qui aliquip in commodo est mollit enim irure nostrud aliquip
            quis sunt enim.
            <br />
            <br />- Magna exercitation et ea laborum adipisicing mollit est
            pariatur dolor cupidatat reprehenderit fugiat fugiat.
            <br />- Minim ad anim reprehenderit cillum fugiat quis ex
            adipisicing esse mollit et nostrud.
          </h2>
          <Button url={"/contact"} text="contact us" />
        </div>
      </div>
    </div>
  );
};

export default About;
