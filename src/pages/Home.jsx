import React, { useState, useEffect } from 'react'; // Ensure useState and useEffect are imported
import { Link } from 'react-router-dom'; // Ensure Link is imported
import Typography from "../components/Typography";
import Carousel from "../components/Carousel";
import { Container } from "../Container/Container";

export default function Home() { // Make sure everything is inside the Home function component
  const [products, setProducts] = useState([]); // State for products
  const [loading, setLoading] = useState(true); // State for loading status
  const [categories, setCategories] = useState([]); 
  const [activeCategory, setActiveCategory] = useState(null);

  // Fetching products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        const data = await response.json();
        setProducts(data);
        
        // Get unique categories from the fetched products
        const uniqueCategories = [...new Set(data.map(product => product.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Once fetching is done, set loading to false
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures this runs only once on mount

  const filteredProducts = activeCategory
  ? products.filter(product => product.category === activeCategory)
  : products;
  if (loading) {
    return <div>Loading...</div>; // Loading screen if data is still being fetched
  }

  return (
    <>
      <Carousel />
      <Container>
        <div className="text-left">
          <Typography type={"h1"} color={"secondary"} className={"text-amber-500 text-center my-1"}>
            Our Products
          </Typography>
          <Typography type={"p"} className={"text-center my-2"}>

 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            eligendi atque pariatur incidunt necessitatibus? Unde, ex molestias
            esse consectetur sint perspiciatis debitis nemo quos id, iure
            repellendus sequi tempora labore.
          </Typography>
        </div>

        <div className="flex justify-center space-x-4 my-4">
          <button 
            className={`py-2 px-4 rounded ${!activeCategory ? 'bg-amber-500' : 'bg-gray-300'}`}
            onClick={() => setActiveCategory(null)} // Show all products
          >
            All Products
          </button>
          {categories.map(category => (
            <button 
              key={category} 
              className={`py-2 px-4 rounded ${activeCategory === category ? 'bg-amber-500' : 'bg-gray-300'}`}
              onClick={() => setActiveCategory(category)} // Filter by category
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-x-5">
          {filteredProducts.map(({ title, price, image, id }) => (
            <div key={id} className="shadow-amber-700 shadow my-3 p-1">
              
              <Link to={`${id}`}>
                <img
                  src={image || "default-image.jpg"} // Image fallback
                 className='min-w-full h-96 object-cover'
                  alt={title}
                />
              </Link>
              
              <Typography type={"h2"}>
              {title}
              </Typography>
              <Typography type={"p"}>
              {price}
              </Typography>
           
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
