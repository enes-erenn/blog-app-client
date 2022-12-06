import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Posts.module.scss";

interface PostType {
  title: string;
  desc: string;
  id: string;
  img: string;
}

const Posts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  return (
    <div className={styles.container}>
      {posts.map((post: PostType) => (
        <div key={post.id} className={styles.post}>
          <div className={styles.img_container}>
            <Image src="" alt="Post" />
          </div>
          <div className={styles.content}>
            <Link href={`/post/${post.id}`}>
              <h1>{post.title}</h1>
            </Link>
            <p>{post.desc}</p>
            <button>Read More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
