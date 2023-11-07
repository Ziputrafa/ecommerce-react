import { useContext } from 'react';
import { Context } from '../../../context/context';
import cartIcon from '../../../assets/icons/cart.svg';

const AddToCart = () => {
  const { cartProducts, setCartProducts, selectProductToBuy, setWarningMessage } = useContext(Context);

  const addProductToCart = () => {
    const existingProductId = cartProducts.findIndex((cartProduct) => cartProduct.id === selectProductToBuy.id);

    if (existingProductId !== -1) {
      cartProducts[existingProductId].quantity += 1;
      setCartProducts([...cartProducts]);
    } else {
      setCartProducts([...cartProducts, { ...selectProductToBuy, quantity: 1 }]);
    }
    setWarningMessage({ warningMessage: `${selectProductToBuy?.title} Added to Cart`, type: 'info' });
  };

  return (
    <button onClick={addProductToCart} className=" border-solid border-2 border-amber-300 w-full flex gap-3 items-center  px-3 py-1 rounded-lg">
      <img alt="cart button" src={cartIcon} /> <p>Add to Cart</p>
    </button>
  );
};

export default AddToCart;
