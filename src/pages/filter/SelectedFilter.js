import { useContext } from 'react';
import closeIcon from '../../assets/icons/close.svg';
import { Context } from '../../context/context';

const SelectedFilter = () => {
  const { filterData, dispatchFilter, setLink, limitProductToLoad } = useContext(Context);

  return (
    <section className="grid justify-start gap-2">
      {filterData.productSorting ? (
        <section className="grid justify-start">
          <div className="bg-amber-300 p-2 rounded-lg text-sm flex gap-2 items-center">
            <p>{filterData.productSorting}</p>
            <button
              onClick={() => {
                dispatchFilter({ type: 'unselectProductSorting' });
              }}
            >
              <img alt="close button" src={closeIcon} />
            </button>
          </div>
        </section>
      ) : (
        <></>
      )}

      {filterData.productCategory ? (
        <section className="p-2 bg-zinc-200 rounded-lg capitalize text-sm flex place-content-between gap-2 items-center h-fit">
          <p>{filterData?.productCategory} </p>
          <button
            onClick={() => {
              dispatchFilter({ type: 'unselectCategory', value: filterData.productCategory });
              setLink(`${process.env.REACT_APP_GET_PRODUCTS_WITH_LIMIT_LINK}${limitProductToLoad}`);
            }}
          >
            <img alt="close button" src={closeIcon} />
          </button>
        </section>
      ) : (
        <></>
      )}
    </section>
  );
};

export default SelectedFilter;
