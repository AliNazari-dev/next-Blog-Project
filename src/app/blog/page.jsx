import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = async () => {
  return (
    <div className={styles.maincontainer}>
      <Link href={"/blog/testId"} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src='https://educative.io/v2api/editorpage/6452289848475648/image/5294398307303424' alt='' width={400} height={250} className={styles.image} priority />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>DESC</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
