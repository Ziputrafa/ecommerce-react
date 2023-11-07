import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate(null);
  return (
    <section className="p-10 grid gap-5 justify-items-start">
      <h1>It's an about Page</h1>
      <div>
        <p>This is build by React JS</p>
        <p>I made this for portfolio purpose</p>
      </div>

      <div>
        <p>There are 2 features that I want to mention in this project. </p>
        <p>those are filter feature and cart feature</p>
        <p>You can try both</p>
      </div>
      <div>
        <p>in the filter feature, you can sort products by most rated, most in stock, and most discount. they are running fast Try it </p>
        <p> also you can filter just only display products with less than the price that you want to. the default is less than 2k usd, you can change. try to only display the products with less than 20 usd in price</p>
        <p> and the last in the filter feature is filter by category. let's say you click the smartphone category. of course it will only display products with category smartphone</p>
      </div>
      <p>try to combine all the filter. try diplay men shoes and men watch product with the price is less than 40 usd, and sort by most discount</p>

      <p>and than the cart feature, you can increase or decrease the product quantity</p>

      <p>all of features are responsive for any devices</p>
      <button className="py-1 px-3 bg-zinc-300 rounded-lg" onClick={() => navigate('/')}>
        Go to Home
      </button>
    </section>
  );
};

export default About;
