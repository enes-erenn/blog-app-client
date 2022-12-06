import Image from "next/image";
import React, { useState } from "react";
import styles from "../../styles/Side.module.scss";
import { PostType } from "../../types/types";

const Side = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  return (
    <div className={styles.container}>
      <h3>Other posts you may like</h3>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <Image src="" alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Side;
