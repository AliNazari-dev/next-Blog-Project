import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

async function getData(id) {
  const res = await fetch(`https:/jsonplaceholder.typicode.com/posts/${id}`, { cache: "no-store" });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.body}</p>
          <div className={styles.author}>
            <Image src={"https://educative.io/v2api/editorpage/6452289848475648/image/5294398307303424"} alt='' width={40} height={40} className={styles.avatar} />
            <span className={styles.username}>Alex</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={"https://educative.io/v2api/editorpage/6452289848475648/image/5294398307303424"} alt='' fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ipsum alias. Reprehenderit sed, quis eos excepturi libero voluptates suscipit perferendis quas in quod, molestias sint non, aut quidem. Reprehenderit, ratione.</p>
      </div>
    </div>
  );
};

export default BlogPost;
