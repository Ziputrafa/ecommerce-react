import { useContext } from 'react';
import { Context } from '../../context/context';
import ProductQuantity from './ProductQuantity';
import DeleteProductInCart from './DeleteProductInCart';
import checkout from '../../assets/icons/checkout.svg';

const Cart = () => {
  const { cartProducts } = useContext(Context);

  return (
    <>
      {cartProducts.length ? (
        <section className="p-4 w-full text-xs desktop:w-9/12">
          {cartProducts?.map((cartProduct) => (
            <article key={cartProduct.id} className="grid grid-cols-4 gap-4 p-2 rounded-lg place-items-center bg-zinc-200 h-fit my-5">
              <img alt={`${cartProduct.title} in the cart`} className="object-cover w-full rounded-md h-24" src={cartProduct.thumbnail} />

              <article className="justify-self-start">
                <h3>{cartProduct.title}</h3>
                <p>{cartProduct.brand}</p>
              </article>

              <ProductQuantity product={cartProduct} />

              <article className="grid grid-rows-2 gap-2">
                <DeleteProductInCart productId={cartProduct.id} />

                <button className="flex gap-2 py-1 px-3 place-items-center rounded-lg bg-amber-300">
                  <img alt="checkout button" src={checkout} />
                  <p className="phone:hidden">Checkout</p>
                </button>
              </article>
            </article>
          ))}
        </section>
      ) : (
        <p className="p-5">It's Empty...</p>
      )}
    </>
  );
};

export default Cart;
