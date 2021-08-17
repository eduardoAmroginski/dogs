import React, { useEffect } from "react";

import FeedPhotosItem from "../FeedPhotosItem/FeedPhotosItem";
import Error from "../../Helper/Error/Error";
import Loading from "../../Helper/Loading/Loading";

import useFetch from "../../../Hooks/useFetch";

import { PHOTOS_GET } from "../../../api";

import styles from "./FeedPhotos.module.css";

const FeedPhotos = () => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ pages: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
      console.log(json);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;

  if (data)
    return (
      <ul className={`animeLeft ${styles.feed}`}>
        {data.map((photo) => (
          <FeedPhotosItem key={photo.id} photo={photo} />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
