import { useState, createContext, useMemo, useReducer } from 'react';
import filterReducer from '../pages/filter/filterReducer';

const INITIAL_FILTER_SETTING = { maxPrice: 2000, productCategory: '', productSorting: '' };

export const Context = createContext(null);

const ContextComponent = ({ children }) => {
  const [link, setLink] = useState(`${process.env.REACT_APP_GET_PRODUCTS_WITH_LIMIT_LINK}10`);
  const [cartProducts, setCartProducts] = useState([]);
  const [selectProductToBuy, setSelectProductToBuy] = useState(null);
  const [filterSetting, dispatchFilter] = useReducer(filterReducer, INITIAL_FILTER_SETTING);
  const [limitProductToLoad, setLimitProductToLoad] = useState(20);
  const [warningMessage, setWarningMessage] = useState({ warningMessage: '', type: 'info' });

  const contextValue = useMemo(() => {
    return {
      link,
      setLink,
      cartProducts,
      setCartProducts,
      selectProductToBuy,
      setSelectProductToBuy,
      filterData: { maxPrice: filterSetting.maxPrice, productCategory: filterSetting.productCategory, productSorting: filterSetting.productSorting },
      dispatchFilter,
      limitProductToLoad,
      setLimitProductToLoad,
      warningMessage,
      setWarningMessage,
    };
  }, [link, cartProducts, selectProductToBuy, filterSetting.maxPrice, filterSetting.productSorting, filterSetting.productCategory, dispatchFilter, limitProductToLoad, warningMessage.warningMessage, warningMessage.type]);

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextComponent;
