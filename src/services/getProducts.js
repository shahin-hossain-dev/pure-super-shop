export const getCategoryProduct = async (title) => {
  const products = await fetch(
    `http://localhost:3000/products/api/get-category/${title}`
  );
  const data = await products.json();
  console.log(data);
  return data;
};

//get product with Id
export const getProductWithId = async (id) => {
  const product = await fetch(`http://localhost:3000/products/api/${id}`);
  const data = await product.json();
  return data;
};
