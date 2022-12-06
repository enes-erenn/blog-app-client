import React, { useState } from "react";
import ReactQuill from "react-quill";
import styles from "../styles/Write.module.scss";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <input type="text" />
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
            <button>Update</button>
          </div>
        </div>
        <div className={styles.item}>
          <div>
            <h1>Category</h1>
            <input type="radio" name="category" value="art" id="art" />
            <label htmlFor="art">Art</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
