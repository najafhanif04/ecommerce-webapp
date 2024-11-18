import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]); // renamed to products for clarity
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // moved here to ensure it's set after fetch
      }
    };

    fetchProducts();
  }, []); // added an empty dependency array to run only once

  if (loading) {
    return <div>Loading...</div>; // display loading once instead of in map
  }

  return (
    <div>
      <div className="grid grid-cols-5 gap-x-5">
        {products.map(({ title, price, image, id }) => (
          <div key={id} className="border-4 border-gray-500 my-3">
            <h1 className="text-black">{title}</h1>
            <Link to={`${id}`}>
              <img src={image} width={300} height={200} alt={title} /> {/* added alt for accessibility */}
            </Link>
            <h1>${price}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
