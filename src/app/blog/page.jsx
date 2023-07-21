import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData() {
  const res = await fetch("https:/jsonplaceholder.typicode.com/posts", { cache: "no-store" });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return notFound();
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.maincontainer}>
      {data.map((item) => (
        <Link href={`/blog/${item.id}`} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image src='https://educative.io/v2api/editorpage/6452289848475648/image/5294398307303424' alt='' width={400} height={250} className={styles.image} priority />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>DESC</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
