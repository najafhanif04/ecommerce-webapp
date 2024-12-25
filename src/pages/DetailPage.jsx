import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApi } from "../hooks/getApi";

const ProductDetail = () => {
  const { id } = useParams(); // Extract the product ID from the URL
  // const [product, setProduct] = useState(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data, loading, error } = getApi("login");
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  if (!error) return <div>Product not found.</div>;

  return (
    <div className="container mx-auto p-4">
      <img
        src={product.image}
        alt={product.title}
        className="w-full max-w-md mx-auto"
      />
      <h1 className="text-2xl font-bold my-4">{product.title}</h1>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-amber-500 text-lg font-bold">
        Price: ${product.price}
      </p>
    </div>
  );
};

export default ProductDetail;
