import { api } from "@/api";
import { useState, useEffect } from "react";

export const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api
      .get(endpoint)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => setError(err.response.data))
      .finally(() => setLoading(false));
  }, [endpoint]);

  return { data, error, loading };
};
