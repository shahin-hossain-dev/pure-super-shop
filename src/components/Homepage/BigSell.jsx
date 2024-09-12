
import Link from "next/link";

const BigSell = () => {
    return (
        <div style={{backgroundImage: 'url("/assets/Banner_Image/5172658.jpg")'}} className=" font-[sans-serif] relative bg-cover bg-center mx-auto rounded-lg overflow-hidden">
        <div className="grid sm:grid-cols-2 gap-6 max-sm:gap-12 py-12 px-6">
          <div className="bg-gradient-to-tr from-[#273284b6] to-[#1e1e60] px-4 py-8 text-center rounded-[30px] w-full max-w-[300px] h-max skew-x-[10deg] mx-auto shadow-lg shadow-purple-400">
            <h6 className="text-gray-300 text-4xl">Big</h6>
            <h2 className="text-white text-7xl font-bold mt-0.5">Sale!</h2>
            <p className="text-gray-300 text-base mt-2">Arriving this weekend</p>
          </div>
          <div className="text-center text-white">
            <h3 className="font-bold text-4xl">Special Offer</h3>
            <h6 className="text-2xl mt-0.5">Limited Time Deal</h6>
            <p className="text-base mt-4">
              Discover amazing discounts and deals. {`Don't`} miss out on our exclusive
              offers available for a limited time.
            </p>
           <div className="mt-8">
           <Link
              href="/products"
              className="bg-[#84b93e] text-white tracking-wide font-semibold text-sm py-3 px-6 rounded-lg w-max "
            >
              Shop Now
            </Link>
           </div>
          </div>
        </div>
      </div>
      
    );
};

export default BigSell;