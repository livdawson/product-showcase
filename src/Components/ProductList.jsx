import { useState, useEffect } from "react"
import { getAllProducts } from "../Utils/api";
import ErrorComponent from "./ErrorComponent";
import ProductCard from "./ProductCard";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const products = await getAllProducts();
            const filteredProducts = products.filter(product => product.brand !== "Apple");
            setProducts(filteredProducts);
            setIsLoading(false);
          } catch (err) {
            setIsLoading(false);
            setError("Error fetching products: " + err.message);
          }
        };
      
        fetchData();
      }, []);

      if (error) {
        return (
          <ErrorComponent
            message={error}
          />
        );
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
                  />
                ))}
              </div>
            )}
            </main>
    )
    }
}