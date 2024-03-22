import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

export const metadata = {
  title: "parklego about",
  description: "parklego next tutorial",
};

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} fill={true} src={"/about.png"} alt="" />
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
            <br />
            <br />
            Voluptate est nisi eiusmod fugiat elit ullamco culpa culpa ad nisi.
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
            <br />
            Occaecat officia aute occaecat incididunt laboris est dolor amet
            ullamco ex ad fugiat pariatur laborum Lorem.
            <br />
            <br />
            1. Sunt ea duis sint proident voluptate elit pariatur aliqua
            deserunt officia quis aute in.
            <br />
            <br />
            2. Pariatur duis sint officia cupidatat.
            <br />
            <br />
            3. Aliquip minim exercitation velit occaecat laboris eiusmod tempor
            voluptate culpa exercitation duis ullamco labore laboris veniam.
            <br />
            <br />
            Laboris fugiat exercitation deserunt consequat ut tempor laboris
            culpa eu eiusmod ex fugiat veniam. Non velit aliquip sit tempor ex
            consectetur adipisicing dolor velit. Ad adipisicing et esse nisi
            occaecat cupidatat. Aliquip adipisicing tempor mollit. Minim sit
            aliquip non sint occaecat commodo ex culpa proident velit voluptate
            veniam.
          </h2>
          <Button url={"/contact"} text="contact us" />
        </div>
      </div>
    </div>
  );
};

export default About;
