import Image from "next/image";
import styles from "./page.module.css";
import main from "/public/main.png";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Elit voluptate minim occaecat adipisicing amet cillum dolore.
        </h1>
        <p className={styles.desc}>
          Qui eu Lorem eiusmod eiusmod eiusmod enim non dolore aliqua ad.
        </p>
        <Button
          url={"/portfolio"}
          text="Nulla nostrud cillum do est excepteur cillum labore esse."
        ></Button>
      </div>
      <div className={styles.item}>
        <Image className={styles.img} src={main} alt="main image" />
      </div>
    </div>
  );
}
