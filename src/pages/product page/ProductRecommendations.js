import { Context } from '../../context/context';
import { useContext } from 'react';
import starIcon from '../../assets/icons/star.svg';
import useGetProduct from '../../hooks/useGetProduct';
import CardSkeleton from '../../components/skeleton/CardSkeleton';

const ProductRecommendations = () => {
  const { selectProductToBuy, setSelectProductToBuy } = useContext(Context);
  const [products, loading] = useGetProduct(`${process.env.REACT_APP_GET_PRODUCTS_BY_CATEGORY_LINK}${selectProductToBuy?.category}`);
  const productRecommendations = products.filter((product) => product.id !== selectProductToBuy?.id);

  return (
    <>
      {loading ? (
        <CardSkeleton />
      ) : (
        <section>
          <h2 className="text-xl font-bold my-6">Similar Category</h2>

          <article className="my-6 grid gap-8 grid-cols-3 phone:grid-cols-1">
            {productRecommendations?.map((product) => (
              <section onClick={() => setSelectProductToBuy({ ...product })} key={product.id} className="cursor-pointer h-64 rounded-lg shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] bg-white">
                <section className="relative w-full overflow-hidden  h-4/6">
                  <img loading="lazy" src={product.thumbnail} alt={`${product.title} at Zuper Shop`} className="rounded-t-lg object-cover object-top  h-full w-full" />
                  <p className="absolute bottom-3 bg-amber-300 px-3 py-1 text-xs">{`${Math.floor(product.discountPercentage)}% OFF`}</p>
                </section>
                <section className="my-3 flex justify-between px-3 ">
                  <article className="grid gap-1 ">
                    <div className="flex gap-1">
                      <img alt={`${product.rating.toFixed(1)} rating for ${product.title} at Zuper Shop`} src={starIcon} />
                      <p className=" text-xs">{product.rating.toFixed(1)}</p>
                    </div>
                    <h3 className="text-sm truncate capitalize text-gray-700">{product.title}</h3>

                    <p className="capitalize text-xs text-gray-500">{product.brand}</p>
                  </article>
                  <p className="text-sm font-medium text-gray-900">${product.price}</p>
                </section>
              </section>
            ))}
          </article>
        </section>
      )}
    </>
  );
};

export default ProductRecommendations;
