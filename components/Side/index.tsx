import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { PostType } from "../../types/types";
import Link from "next/link";
import styles from "../../styles/Side.module.scss";

interface Props {
  category?: string;
  currentPost?: number;
}

const Side: React.FC<Props> = ({ category, currentPost }) => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          process.env.API_URL + `/posts/?category=${category}`
        );
        setPosts(res.data.filter((p: PostType) => p.id !== currentPost));
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [category, currentPost]);

  return (
    <div className={styles.container}>
      <h3>Other posts you may like</h3>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <div className={styles.img_container}>
            <Image
              src={post?.img || ""}
              alt="Post"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <Link href={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default React.memo(Side);
