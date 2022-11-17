import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [onLoading, setOnLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setOnLoading(false);
      });
  }, [url]);

  return { data, onLoading };
}

export default useFetch;
