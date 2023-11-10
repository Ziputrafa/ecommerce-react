import SelectedCategory from './SelectedFilter';
import SortingFilter from './filter options/SortingFilter';
import PriceFilter from './filter options/PriceFilter';
import CategoryFilter from './filter options/CategoryFilter';

const Filter = () => {
  return (
    <section className="p-4 grid gap-8 desktop:w-9/12">
      <SelectedCategory />

      <section className="grid gap-4">
        <section className="grid grid-cols-2 gap-5">
          <SortingFilter />
          <PriceFilter />
        </section>
        <CategoryFilter />
      </section>
    </section>
  );
};

export default Filter;
