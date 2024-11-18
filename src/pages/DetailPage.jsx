import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, []);

  return (
    <div    >
       <div className="grid grid-cols-3 gap-x-4">
        <img src={product.image} alt={product.title} />{" "}
        {/* Display product image */}
        <h2>{product.title}</h2>
        <p>{product.description}</p> {/* Display product description */}
        <p>Price: ${product.price}</p> {/* Display product price */}
      </div>
    </div>
  );
};

export default DetailPage;
