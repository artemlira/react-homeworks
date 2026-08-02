import {useEffect, useState} from "react";

const BASE_URL = 'https://simple-backend-n3ac.onrender.com';

export function useFetch(routeUrl = '/api/products') {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(`${BASE_URL}${routeUrl}`);
        const resData = await res.json();
        setData(resData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [routeUrl]);
  return {isLoading, error, data};
}
