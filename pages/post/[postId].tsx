import React from "react";
import Image from "next/image";
import Link from "next/link";
import Side from "../../components/Side";
import styles from "../../styles/Post.module.scss";

const Post = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.img_container}>
          <Image src="" alt="" />
        </div>
        <div className={styles.user}>
          <div className={styles.userImage}>
            <Image src="" alt="" />
          </div>
          <div className={styles.userInfo}>
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className={styles.edit}>
            <Link href={`/write?edit=2`}>
              <button>Edit</button>
            </Link>
            <button>Delete</button>
          </div>
        </div>
        <h1>
          Lorem, ipsum enim assumenda eaque amet tenetur debitis inventore eius!
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          dolorem incidunt architecto harum provident nobis deserunt error saepe
          nesciunt adipisci consequuntur illo quidem temporibus, omnis mollitia
          beatae. Sunt, tempore reprehenderit? Ex nesciunt soluta nihil nemo
          repellendus eveniet exercitationem dolores nam, numquam tenetur in.
          Soluta non error explicabo est quis laboriosam fuga, officia eveniet
          quasi iste amet quae ipsum, praesentium placeat. Quam ducimus nobis
          repudiandae iure accusamus suscipit tempore, magni autem nisi mollitia
          aut, exercitationem natus impedit laboriosam unde? Deserunt voluptates
          corrupti aspernatur eaque accusantium! Qui corporis dolorem vero
          dignissimos in! Temporibus voluptate tenetur officiis ducimus nobis
          corrupti molestias alias veniam. Maxime sapiente, libero aut
          reiciendis velit ipsum voluptatem repudiandae officia assumenda quod,
          ipsa blanditiis perspiciatis ad nobis eos quia modi? Hic cupiditate
          optio officiis! Iure, omnis, commodi veniam ullam maiores tenetur
          consectetur est quo nostrum optio pariatur quas fugiat? Iusto autem
          deleniti accusantium eum eius mollitia dolorem illo modi facilis!
        </p>
      </div>
      <Side />
    </div>
  );
};

export default Post;
