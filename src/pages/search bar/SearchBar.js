import { useRef, useContext } from 'react';
import search from '../../assets/icons/search.svg';
import { Context } from '../../context/context';

const SearchBar = () => {
  const inputProduct = useRef(null);
  const { setLink, limitProductToLoad } = useContext(Context);

  const searchProduct = () => {
    if (inputProduct.current.value) {
      setLink(`${process.env.REACT_APP_GET_PRODUCTS_BY_SEARCH_LINK}${inputProduct.current.value}`);
    } else {
      setLink(`${process.env.REACT_APP_GET_PRODUCTS_WITH_LIMIT_LINK}${limitProductToLoad}`);
    }
  };
  return (
    <div className=" rounded-lg bg-white shadow-sm pr-2">
      <input className="px-2 py-1 focus:outline-0 capitalize rounded-lg" ref={inputProduct} placeholder="Search Product" />
      <button className="" onClick={searchProduct}>
        <img alt="search button" src={search} />
      </button>
    </div>
  );
};

export default SearchBar;
