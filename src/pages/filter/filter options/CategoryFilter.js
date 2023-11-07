import { categories } from '../../../data/categories';
import { useContext } from 'react';
import { Context } from '../../../context/context';

const CategoryFilter = () => {
  const { dispatchFilter, setLink } = useContext(Context);
  return (
    <article>
      <h2 className="py-2">Filter by Category</h2>
      <article className="grid grid-cols-5 phone:grid-cols-2 gap-2 place-content-center">
        {categories?.map((category) => (
          <button
            onClick={() => {
              dispatchFilter({ type: 'selectCategory', value: category });
              setLink(`${process.env.REACT_APP_GET_PRODUCTS_BY_CATEGORY_LINK}${category}`);
            }}
            className="p-2 bg-zinc-200 rounded-lg text-center capitalize text-sm"
            key={category}
          >
            {category}
          </button>
        ))}
      </article>
    </article>
  );
};

export default CategoryFilter;
