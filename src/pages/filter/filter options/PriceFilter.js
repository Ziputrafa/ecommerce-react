import { useContext } from 'react';
import { Context } from '../../../context/context';

const PriceFilter = () => {
  const { dispatchFilter, filterData } = useContext(Context);
  return (
    <article>
      <h2 className="py-2">Filter by Pricing</h2>
      <article className="grid">
        <article>
          <p>&lt; ${filterData.maxPrice}</p>
        </article>
        <article>
          <input
            min={10}
            max={2000}
            step={10}
            type="range"
            onChange={(e) => {
              dispatchFilter({ type: 'maxPrice', value: e.target.value });
            }}
            value={filterData.maxPrice}
          />
        </article>
      </article>
    </article>
  );
};

export default PriceFilter;
