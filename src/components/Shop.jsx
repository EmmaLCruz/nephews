import TShirt1 from "../assets/images/shop-skull.png";
import { FaStar, FaRegStar } from "react-icons/fa6";
import Background from "../assets/images/gradient.png";

const Shop = () => {
  const TShirtCard = () => {
    return (
      <div className="relative mx-6 w-40">
        <figure>
          <img src={TShirt1} alt="" />
        </figure>
        <h3 className="font-bold">T-shirt 1</h3>
        <div className="flex gap-2">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
          <FaRegStar />
        </div>
        <div className="flex gap-4">
          <span className="text-gray-200">$20.99</span>
          <span className="text-gray-500 line-through">$25.99</span>
        </div>

        <button className="w-full bg-accent py-1 mt-4 text-white font-semibold hover:bg-accent/90 transition-colors duration-300">
          Add to cart
        </button>
      </div>
    );
  };

  return (
    <section className="newsblog" id="shop">
      <article className="py-10">
        <article className="relative w-full mt-20 lg:w-11/12 mb-12 bg-black/90 flex flex-col justify-center items-center mx-auto">
          <img
            className="absolute top-0 left-0 w-full h-24 object-cover bg-accent/60"
            src={Background}
            alt=""
          />
          <div className="w-full px-12 p-8 z-10">
            <h2 className="text-3xl font-bold text-white">Archives: Shop</h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 w-full px-12 mt-8">
            <div className="flex flex-col justify-center items-center gap-4 w-full mx-auto lg:w-5/6">
              <div className="flex justify-between gap-4 w-full">
                <p className="text-sm text-gray-400">
                  Showing 1 - 12 of 20 results
                </p>
                <select
                  name="Dropdown"
                  id=""
                  className="text-sm text-gray-400 cursor-pointer"
                >
                  <option value="Default Sorting">Default Sorting</option>
                  <option value="2">Sort by Popularity</option>
                  <option value="3">Sort by Average Rating</option>
                  <option value="4">Sort by Latest</option>
                  <option value="5">Sort by Price: Low to High</option>
                  <option value="6">Sort by Price: High to Low</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-12 pt-8 pb-20 w-full">
                <TShirtCard />
                <TShirtCard />
                <TShirtCard />
                <TShirtCard />
                <TShirtCard />
                <TShirtCard />
                <TShirtCard />
                <TShirtCard />
                <TShirtCard />
                <TShirtCard />
                <TShirtCard />
                <TShirtCard />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-16 -order-1 lg:order-2 lg:grid-cols-1 lg:h-fit w-full lg:w-80">
              <div>
                <h2>Cart</h2>
                <p>No products in the cart.</p>
              </div>

              <div className="flex flex-col gap-4">
                <h2>Filter by price</h2>
                <div className="flex items-center px-2">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    value="200"
                    className="w-full h-2 appearance-none bg-gray-200 outline-none cursor-pointer"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <button className="w-1/3 bg-accent py-2 text-white font-semibold hover:bg-accent/90 transition-colors duration-300">
                    Filter
                  </button>
                  <span>Price: $20 - $1000</span>
                </div>
              </div>

              <div>
                <h2>Filter by</h2>
                <div className="flex flex-col gap-4">
                  <ul>
                    <li>
                      <a href="#">Blue</a>
                      <span>(2)</span>
                    </li>
                    <li>
                      <a href="#">Gray</a>
                      <span>(3)</span>
                    </li>
                    <li>
                      <a href="#">Green</a>
                      <span>(4)</span>
                    </li>
                    <li>
                      <a href="#">Red</a>
                      <span>(5)</span>
                    </li>
                    <li>
                      <a href="#">Yellow</a>
                      <span>(6)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </section>
  );
};

export default Shop;
