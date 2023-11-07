import { useEffect, useContext, useState } from 'react';
import { Context } from '../context/context';
import axios from 'axios';

const useGetProduct = (url) => {
  const { setWarningMessage } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url, { signal });

        setProduct(response.data.products);
        setLoading(false);
      } catch (error) {
        if (error.message !== 'canceled') {
          setWarningMessage({ warningMessage: error.warningMessage, type: 'error' });
        }
      }
    };
    getData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return [product, loading];
};

export default useGetProduct;
