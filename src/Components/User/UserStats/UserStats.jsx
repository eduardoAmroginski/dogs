import React, { lazy, Suspense, useEffect } from "react";

import Head from "../../Helper/Head/Head";
import Loading from "../../Helper/Loading/Loading";
import Error from "../../Helper/Error/Error";

import useFetch from "../../../Hooks/useFetch";

import { STATS_GET } from "../../../api";

const UserStatsGraphs = lazy(() =>
  import("../UserStatsGraphs/UserStatsGraphs")
);

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    async function getData() {
      const { url, options } = STATS_GET(token);
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  if (data) {
    return (
      <Suspense fallback={<></>}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </Suspense>
    );
  } else {
    return null;
  }
};

export default UserStats;
