import { useContext } from 'react';
import { Context } from '../../context/context';
import { useMemo } from 'react';
import useGetProduct from '../../hooks/useGetProduct';
import CardSkeleton from '../../components/skeleton/CardSkeleton';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { filterData, link } = useContext(Context);
  const [products, loading] = useGetProduct(link);

  const filteredProducts = useMemo(() => {
    let renderProduct = [...products];

    switch (filterData.productSorting) {
      case 'Most Rated':
        renderProduct.sort((a, b) => b.rating - a.rating);
        break;
      case 'Most Discount':
        renderProduct.sort((a, b) => b.discountPercentage - a.discountPercentage);
        break;
      case 'Most Stock':
        renderProduct.sort((a, b) => b.stock - a.stock);
        break;
      default:
        renderProduct.sort((a, b) => a.id - b.id);
        break;
    }

    if (filterData.maxPrice) {
      renderProduct = renderProduct.filter((product) => product.price <= filterData.maxPrice);
    }

    return renderProduct;
  }, [products, filterData.productSorting, filterData.maxPrice]);

  return <>{loading ? <CardSkeleton /> : <ProductCard filteredProducts={filteredProducts} />}</>;
};

export default ProductList;
