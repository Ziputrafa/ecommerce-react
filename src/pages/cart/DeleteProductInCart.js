import { useContext } from 'react';
import { Context } from '../../context/context';
import trashIcon from '../../assets/icons/trash.svg';

const DeleteProductInCart = ({ productId }) => {
  const { cartProducts, setCartProducts } = useContext(Context);

  const deleteProduct = () => {
    const filterProductInCart = cartProducts?.filter((cartProduct) => cartProduct.id !== productId);
    setCartProducts(filterProductInCart);
  };
  return (
    <button onClick={() => deleteProduct()} className="flex gap-2 py-1 px-3 place-items-center rounded-lg bg-white text-red-500">
      <img alt="trash button" src={trashIcon} />
      <p className="phone:hidden">Delete</p>
    </button>
  );
};

export default DeleteProductInCart;
