import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Side from "../../components/Side";
import { PostType } from "../../types/types";
import { useRouter } from "next/router";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../../context/authContext";
import styles from "../../styles/Post.module.scss";

const Post = () => {
  const [post, setPost] = useState<PostType | null>(null);
  const router = useRouter();
  const { postId } = router.query;
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(process.env.API_URL + `/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [postId]);

  const handleDeletePost = async () => {
    try {
      await axios.delete(process.env.API_URL + `/posts/${postId}`);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.img_container}>
          <Image src={post?.img || ""} alt="" />
        </div>
        <div className={styles.user}>
          <div className={styles.userImage}>
            <Image src={currentUser?.image || ""} alt="" />
          </div>
          <div className={styles.userInfo}>
            <span>{post?.username}</span>
            <p>Posted {moment(post?.date).fromNow()}</p>
          </div>
          {currentUser?.id === post?.uid && (
            <div className={styles.edit}>
              <Link href={`/write?edit=2`}>
                <button>Edit</button>
              </Link>
              <button onClick={handleDeletePost}>Delete</button>
            </div>
          )}
        </div>
        <h1>{post?.title}</h1>
        <div>{post?.desc}</div>
      </div>
      <Side category={post?.category} />
    </div>
  );
};

export default Post;
