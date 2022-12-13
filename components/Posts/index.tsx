import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PostType } from "../../types/types";
import axios from "axios";

import styles from "../../styles/Posts.module.scss";

interface Props {
  category?: string | undefined;
}

const Posts: React.FC<Props> = ({ category }) => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          category
            ? process.env.API_URL + `/posts/?category=${category}`
            : process.env.API_URL + `/posts`
        );
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [category]);

  const getText = (html: string | undefined) => {
    if (html) {
      const doc = new DOMParser().parseFromString(html, "text/html");
      return doc.body.textContent;
    }
  };

  return (
    <div className={styles.container}>
      {posts.map((post: PostType) => (
        <div key={post.id} className={styles.post}>
          <div className={styles.img_container}>
            <Image
              src={post?.img || ""}
              alt="Post"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.content}>
            <Link href={`/post/${post.id}`}>
              <h1>{post.title}</h1>
            </Link>
            <p>{getText(post.desc)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
