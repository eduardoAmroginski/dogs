import React, { useState } from "react";

import { ReactComponent as Send } from "../../../Assets/enviar.svg";
import Error from "../../Helper/Error/Error";

import useFetch from "../../../Hooks/useFetch";

import { COMMENT_POST } from "../../../api";

import styles from "./PhotoCommentsForm.module.css";

const PhotoCommentsForm = ({ id, setComments }) => {
  const { request, error, loading } = useFetch();

  const [comment, setComment] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const token = window.localStorage.getItem("token");
    const { url, options } = COMMENT_POST(id, { comment }, token);
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button title="Enviar comentário" className={styles.button}>
        <Send />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
