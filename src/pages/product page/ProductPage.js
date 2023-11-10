import { useContext, useLayoutEffect, useRef, useState } from 'react';
import { Context } from '../../context/context';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import SimpleImageSlider from 'react-simple-image-slider';
import starIcon from '../../assets/icons/star.svg';
import checkoutIcon from '../../assets/icons/checkout.svg';
import AddToCart from './add to cart/AddToCart';
import ProductRecommendations from './ProductRecommendations';

const ProductPage = () => {
  const { selectProductToBuy } = useContext(Context);
  const [containerWidth, setContainerWidth] = useState(0);
  const container = useRef(null);

  const imageUrls = selectProductToBuy?.images.map((selectedProductImg) => {
    return { url: selectedProductImg };
  });

  useLayoutEffect(() => {
    setContainerWidth(container.current?.offsetWidth);
  }, []);

  return (
    <section className="p-10 phone:p-5 desktop:w-9/12">
      <section ref={container} className="grid gap-6 w-1/2 phone:w-full ">
        {imageUrls ? (
          <SimpleImageSlider style={{ width: '100%', height: '250px' }} width={containerWidth} height={250} images={imageUrls} showBullets={true} autoPlay={true} slideDuration={1} />
        ) : (
          <Skeleton width={containerWidth} height={250} />
        )}

        <section className="flex justify-between">
          <h1 className="text-xl font-bold">{selectProductToBuy?.title}</h1>
          <p>{`${selectProductToBuy?.stock} in stock`}</p>
        </section>

        <p>{selectProductToBuy?.description}</p>

        <section className="flex gap-2">
          <img alt="rating" src={starIcon} />
          <p>{selectProductToBuy?.rating.toFixed(1)}</p>
        </section>

        <h2 className="font-bold text-4xl">{`$${selectProductToBuy?.price}`}</h2>

        <section className="grid gap-4 justify-start">
          <AddToCart />
          <button className="bg-amber-300  w-full flex gap-3 items-center  px-3 py-1 rounded-lg">
            <img alt="checkout button" src={checkoutIcon} />
            <p>Buy Now</p>
          </button>
        </section>
      </section>

      <ProductRecommendations />
    </section>
  );
};

export default ProductPage;
