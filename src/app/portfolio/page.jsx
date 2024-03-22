import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

export const metadata = {
  title: "parklego portfolio",
  description: "parklego next tutorial",
};

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>choose a card</h1>
      <div className={styles.items}>
        <Link className={styles.item} href={"/portfolio/card1"}>
          <span className={styles.title}>card1</span>
        </Link>

        <Link className={styles.item} href={"/portfolio/card2"}>
          <span className={styles.title}>card2</span>
        </Link>

        <Link className={styles.item} href={"/portfolio/card3"}>
          <span className={styles.title}>card3</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
