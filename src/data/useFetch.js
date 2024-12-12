import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data };
}
