import { useContext } from 'react';
import { Context } from '../../context/context';
import plusIcon from '../../assets/icons/plus.svg';
import minusIcon from '../../assets/icons/minus.svg';

const ProductQuantity = ({ product }) => {
  const { cartProducts, setCartProducts } = useContext(Context);

  const existingProductId = cartProducts.findIndex((cartProduct) => cartProduct.id === product.id);

  const handleProductQuantity = (addQuantity) => {
    cartProducts[existingProductId].quantity += addQuantity;
    setCartProducts([...cartProducts]);
  };

  return (
    <article className="grid place-items-center">
      <article className="grid grid-cols-3 place-items-center gap-2">
        {product.quantity === 1 ? (
          <div></div>
        ) : (
          <button onClick={() => handleProductQuantity(-1)} className="bg-white p-2 rounded-full">
            <img alt="minus button" src={minusIcon} />
          </button>
        )}

        <p>{product.quantity}</p>

        <button onClick={() => handleProductQuantity(1)} className="bg-white p-2 rounded-full">
          <img alt="plus button" src={plusIcon} />
        </button>
      </article>

      <p>{`$${product?.price * product.quantity}`}</p>
    </article>
  );
};

export default ProductQuantity;
