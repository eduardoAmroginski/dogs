import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { PHOTO_GET } from "../../api";
import useFetch from "../../Hooks/useFetch";

import Error from "../Helper/Error/Error";
import Head from "../Helper/Head/Head";
import Loading from "../Helper/Loading/Loading";
import PhotoContent from "./PhotoContent/PhotoContent";

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  useEffect(async () => {
    const { url, options } = PHOTO_GET(id);
    const { response, json } = await request(url, options);
    console.log(json);
  }, [request, id]);

  if (error) return <Error error={error} />;

  if (loading) return <Loading />;

  if (data) {
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent single={true} data={data} />
      </section>
    );
  } else {
    return null;
  }
};

export default Photo;
