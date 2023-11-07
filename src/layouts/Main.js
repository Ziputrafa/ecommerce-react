import ProductList from '../pages/product list/ProductList';
import SelectedFilter from '../pages/filter/SelectedFilter';
import LoadMoreProducts from '../pages/load more products/LoadMoreProduct';

const Main = () => {
  return (
    <main className="mx-auto max-w-3xl phone:p-4 grid gap-2">
      <SelectedFilter />

      <ProductList />

      <LoadMoreProducts />
    </main>
  );
};

export default Main;
