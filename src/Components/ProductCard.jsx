import "./ProductCard.css";
import ProductRating from "./ProductRating";
import ProductTitle from "./ProductTitle";
import ProductDescription from "./ProductDescription";
import ProductPrice from "./ProductPrice";
import ProductStock from "./ProductStock";
import Button from "./Button";
import FavoriteIcon from '@mui/icons-material/Favorite';
import BarChartIcon from '@mui/icons-material/BarChart';

export default function ProductCard({
  productID,
  title,
  description,
  price,
  discountPercentage,
  rating,
  stock,
  image,
}) {
  const formattedNewPrice = (price * (1 - discountPercentage / 100)).toFixed(2);

  return (
    <div className="product-card">
      <img
        src={image}
        alt={`product image for ${title}`}
        className="product-card__image"
      />
      <ProductTitle title={title} />
      <ProductRating rating={rating} />
      <ProductDescription description={description} />
      <FavoriteIcon className="product-card__icon"/>
      <BarChartIcon className="product-card__icon"/>
      <ProductPrice price={price} discountPercentage={discountPercentage} />
      <ProductStock availableStock={stock} />
      {formattedNewPrice >= 100 ? (
        <p>
          <span
            className="material-icons"
            style={{fontWeight: 'bold' }}
          >
            done
          </span>
          FREE UK Delivery
        </p>
      ) : null}
      {formattedNewPrice >= 50 ? (
        <p>
          <span
            className="material-icons"
            style={{fontWeight: "bold" }}
          >
            done
          </span>
          PayPal credit available
        </p>
      ) : null}
      <Button
        className="product-card__basket-button"
        text={
          <p>
            <span className="material-icons">shopping_cart</span> ADD TO BASKET
          </p>
        }
        onClick={() =>
          console.log(`Product ID: ${productID}, Price: £${formattedNewPrice}`)
        }
      />
    </div>
  );
}
