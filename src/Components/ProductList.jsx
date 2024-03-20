import { useState, useEffect } from "react";
import { getAllProducts } from "../Utils/api";
import { selectRandomProducts } from "../Utils/utils";
import ErrorComponent from "./ErrorComponent";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState();

  const highestRating = Math.max(...products.map(product => product.rating))

  const staleDataThreshold = 3 * 60

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getAllProducts();
        const filteredProducts = products.filter(
          (product) => product.brand !== "Apple"
        );
        const lastRefreshTime = localStorage.getItem("lastRefreshTime");
        const currentTime = new Date().getTime();
        const timeSinceRefresh = (currentTime - parseInt(lastRefreshTime)) / 1000;

        
        const selectedProducts = [];
        if (timeSinceRefresh >= staleDataThreshold || !lastRefreshTime) {
          selectedProducts.push(...selectRandomProducts(filteredProducts, 10));
          localStorage.setItem(
            "currentProducts",
            JSON.stringify(selectedProducts)
          );
          localStorage.setItem("lastRefreshTime", currentTime.toString());
          setTimeRemaining(0)
        } else {
          const savedProducts = JSON.parse(
            localStorage.getItem("currentProducts")
          );
          selectedProducts.push(...savedProducts);
          setTimeRemaining((staleDataThreshold - timeSinceRefresh))
        }
      
        selectedProducts.sort((a, b) => b.rating - a.rating);
        setProducts(selectedProducts);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError("Error fetching products: " + err.message);
      }
    };

    fetchData();

    const interval = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => {
        if (prevTimeRemaining > 0) {
          return prevTimeRemaining - 1;
        } else {
          clearInterval(interval);
          return prevTimeRemaining;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (error) {
    return <ErrorComponent message={error} />;
  } else {
    return (
      <main>
        {isLoading ? (
          <p>Fetching products...</p>
        ) : (
          <div>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                productID={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                discountPercentage={product.discountPercentage}
                rating={product.rating}
                stock={product.stock}
                image={product.images[0]}
                timeRemaining={timeRemaining}
                isHighestRated={product.rating === highestRating}
              />
            ))}
          </div>
        )}
      </main>
    );
  }
}
