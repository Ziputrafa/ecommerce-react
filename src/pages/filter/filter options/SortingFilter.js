import { useContext } from 'react';
import { sortingOptions } from '../../../data/sortingFilterOptions';
import { Context } from '../../../context/context';

const SortingFilter = () => {
  const { dispatchFilter } = useContext(Context);
  return (
    <article>
      <h2 className="py-2">Sorting Product</h2>
      <article className="grid grid-rows-3 gap-2 justify-items-start">
        {sortingOptions.map((option) => (
          <button onClick={() => dispatchFilter({ type: 'productSorting', value: option })} className="bg-zinc-200 py-1 px-2 rounded-lg">
            {option}
          </button>
        ))}
      </article>
    </article>
  );
};

export default SortingFilter;
