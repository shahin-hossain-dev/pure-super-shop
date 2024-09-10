export const getCategoryProduct = async (title) => {
  const products = await fetch(
    `http://localhost:3000/products/api/get-category/${title}`
  );
  const data = await products.json();
  console.log(data);
  return data;
};
