import { useState } from "react";

export const getApi = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState(false);

  fetch(`https://fakestoreapi.com/products/${url}`)
    .then((resp) => resp.json())
    .then((data) => setData(data))
    .catch((err) => setError(err));

  return { loading, data, error };
};
