import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Side.module.scss";
import { PostType } from "../../types/types";

interface Props {
  category?: string;
}

const Side: React.FC<Props> = ({ category }) => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          process.env.API_URL + `/posts/?category${category}`
        );
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [category]);

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
