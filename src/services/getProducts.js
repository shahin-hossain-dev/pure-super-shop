export const getCategoryProduct = async (title) => {
  const products = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/products/api/get-category/${title}`
  );
  const data = await products.json();
  // console.log(data);
  return data;
};

//get product with Id
export const getProductWithId = async (id) => {
  const product = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/products/api/${id}`
  );
  const data = await product.json();
  return data;
};
