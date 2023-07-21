import React from "react";
import styles from "./page.module.css";
import Image from "next/image";



const BlogPost = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur? 
          </p>
          <div className={styles.author}>
            <Image
              src={'https://educative.io/v2api/editorpage/6452289848475648/image/5294398307303424'}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Alex</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={'https://educative.io/v2api/editorpage/6452289848475648/image/5294398307303424'}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ipsum alias. Reprehenderit sed, quis eos excepturi libero voluptates suscipit perferendis quas in quod, molestias sint non, aut quidem. Reprehenderit, ratione.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
