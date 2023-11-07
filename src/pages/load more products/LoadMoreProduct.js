import { useContext } from 'react';
import { Context } from '../../context/context';

const LoadMoreProducts = () => {
  const { setLink, limitProductToLoad, setLimitProductToLoad } = useContext(Context);

  const loadMore = () => {
    setLink(`${process.env.REACT_APP_GET_PRODUCTS_WITH_LIMIT_LINK}${limitProductToLoad}`);
    setLimitProductToLoad((prev) => prev + 10);
  };

  const showLoadMoreProductsButton = () => {
    return limitProductToLoad >= 100 ? (
      <></>
    ) : (
      <button className="bg-amber-300 py-1 px-5 my-8 justify-self-start rounded-lg" onClick={loadMore}>
        Load More
      </button>
    );
  };
  return showLoadMoreProductsButton();
};

export default LoadMoreProducts;
