import React, { useEffect, useState } from 'react'
import { GetBookData } from '../service/book.service';

const useFetch = (fetchFun,arg) => {
  const [data, setData] = useState({
    loading: true,
    error: null,
    data: null,
  });
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchFun(arg);
        setData((pre) => {
          return {
            error: null,
            loading: false,
            data: data,
          };
        });
      } catch (error) {
        setData((pre) => {
          return {
            error: error.message,
            loading: false,
            data: null,
          };
        });
      }
    })();
  }, []);

  return data;
}

export default useFetch