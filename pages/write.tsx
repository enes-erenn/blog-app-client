import React, { useState } from "react";
import dynamic from "next/dynamic";
import { PostType } from "../types/types";
import "react-quill/dist/quill.snow.css";
import styles from "../styles/Write.module.scss";
import axios from "axios";
import moment from "moment";

const Write = () => {
  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
  const [value, setValue] = useState("");
  const [post, setPost] = useState<PostType>({
    title: "",
    img: "",
    category: "",
  });
  const [isUpdating, setIsUpdating] = useState<Boolean>(false);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    try {
      if (isUpdating) {
        await axios.patch(process.env.API_URL + `/posts/${post.id}`, {
          ...post,
          desc: value,
        });
      } else {
        await axios.post(process.env.API_URL + `/posts/`, {
          ...post,
          desc: value,
          date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <input
          type="text"
          placeholder="Title"
          onChange={changeHandler}
          name="title"
        />
        <div className={styles.editor_container}>
          <ReactQuill
            className={styles.editor}
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.item}>
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{ display: "none" }} type="file" id="file" name="" />
          <label className={styles.file} htmlFor="file">
            Upload
          </label>
          <div className={styles.buttons}>
            <button>Save as a draft</button>
            <button onClick={handleSubmit}>Publish</button>
          </div>
        </div>
        <div className={styles.item}>
          <div>
            <h1>Category</h1>
            <input
              type="radio"
              name="category"
              value="art"
              id="art"
              onChange={changeHandler}
            />
            <label htmlFor="art">Art</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
