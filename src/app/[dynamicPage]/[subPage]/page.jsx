import Category from "@/components/Homepage/Category";
import ProductCard from "@/components/ProductCard/ProductCard";
import { products } from "@/lib/products";

const SubCategory = ({ params }) => {
  const categoryProducts = products.filter(
    (product) => product.subCategory === params.subPage
  );

  return (
    <div className="lg:flex ">
      <div>
        <Category />
      </div>
      <div className="mt-4 px-4 flex-grow">
        <h2 className="">
          {params.dynamicPage} {">"} {params.subPage}
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full gap-4">
          {categoryProducts?.map((product) => (
            <ProductCard key={product.productName} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubCategory;
