import React, { useEffect } from "react";

import FeedPhotosItem from "../FeedPhotosItem/FeedPhotosItem";
import Error from "../../Helper/Error/Error";
import Loading from "../../Helper/Loading/Loading";

import useFetch from "../../../Hooks/useFetch";

import { PHOTOS_GET } from "../../../api";

import styles from "./FeedPhotos.module.css";

const FeedPhotos = ({ page, user, setModalPhoto, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);

      if (response && response.ok && json.length < total) setInfinite(false);

      console.log(json);
    }
    fetchPhotos();
  }, [request, user, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;

  if (data)
    return (
      <ul className={`animeLeft ${styles.feed}`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
