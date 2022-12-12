import React, { useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import { PostType } from "../types/types";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import moment from "moment";
import styles from "../styles/Write.module.scss";

const Write = () => {
  const [value, setValue] = useState("");
  const [rawImage, setRawImage] = useState<File | null>(null);
  const [post, setPost] = useState<PostType>({
    title: "",
    category: "",
  });
  const [isUpdating, setIsUpdating] = useState<Boolean>(false);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    let image;
    if (rawImage) {
      const data = new FormData();
      data.append("file", rawImage);
      data.append("upload_preset", "uploads");
      let uploadRes;
      if (data) {
        uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/dnlxubidd/image/upload",
          data
        );
        image = uploadRes?.data?.url;
      }
    }
    try {
      if (isUpdating) {
        await axios.patch(process.env.API_URL + `/posts/${post.id}`, {
          ...post,
          desc: value,
        });
      } else {
        await axios.post(
          process.env.API_URL + `/posts/`,
          {
            ...post,
            desc: value,
            img: image,
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          },
          {
            withCredentials: true,
          }
        );
        setRawImage(null);
        setValue("");
        setPost({ category: "", title: "" });
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
          value={post?.title}
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
          <div className={styles.info}>
            <h1>Publish</h1>
            <span>
              <b>Status: </b> Draft
            </span>
            <span>
              <b>Visibility: </b> Public
            </span>
            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.files) {
                  setRawImage(e.target.files[0]);
                }
              }}
            />
            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <label className={styles.file} htmlFor="file">
                Upload Image
              </label>
              <p style={{ color: "lightgray" }}>{rawImage && "Loaded"}</p>
            </div>
          </div>
          <div className={styles.buttons}>
            <button>Save as a draft</button>
            <button onClick={handleSubmit}>Publish</button>
          </div>
        </div>
        <div className={styles.item}>
          <div>
            <h1>Category</h1>
            <div className={styles.category}>
              <input
                type="radio"
                name="category"
                value="Software Development"
                id="software_development"
                checked={post?.category == "Software Development"}
                onChange={changeHandler}
              />
              <label htmlFor="software_development">Software Development</label>
            </div>
            <div className={styles.category}>
              <input
                type="radio"
                name="category"
                value="Personal Development"
                checked={post?.category == "Personal Development"}
                id="personal_development"
                onChange={changeHandler}
              />
              <label htmlFor="personal_development">Personal Development</label>
            </div>
            <div className={styles.category}>
              <input
                type="radio"
                name="category"
                value="Design"
                id="design"
                checked={post?.category == "Design"}
                onChange={changeHandler}
              />
              <label htmlFor="design">Design</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
