import "./ProductCard.css";
import ProductRating from "./ProductRating";
import ProductDescription from "./ProductDescription";
import ProductStock from "./ProductStock";
import Button from "./Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BarChartIcon from "@mui/icons-material/BarChart";
import DeliveryCountdown from "./DeliveryCountdown";

export default function ProductCard({
  productID,
  title,
  description,
  price,
  discountPercentage,
  rating,
  stock,
  image,
  timeRemaining,
  isHighestRated,
}) {
  if (title.charAt(0) === "-") {
    title = title.slice(1);
  }

  const capitalisedTitle = title
    .split(" ")
    .map((word) => word.slice(0, 1).toUpperCase(0) + word.slice(1))
    .join(" ");

  let formattedOriginalPrice = price.toFixed(2);
  if (!formattedOriginalPrice.includes(".")) {
    formattedOriginalPrice += ".00";
  }

  const formattedNewPrice = (price * (1 - discountPercentage / 100)).toFixed(2);

  return (
    <div className={`product-card ${isHighestRated ? "highest-rated" : ""}`}>
      {isHighestRated ? (
        <p className="product-card__recommended">Eclipse recommended</p>
      ) : null}
      <div className="product-card__div1">
        <h2 className="product-card__title">{capitalisedTitle}</h2>
        <ProductRating rating={rating} />
      </div>
      <div className="product-card__div2">
        <img
          src={image}
          alt={`product image for ${title}`}
          className="product-card__image"
        />
      </div>
      <div className="product-card__div3">
        <ProductDescription description={description} />
      </div>
      <div className="product-card__div4">
        <FavoriteIcon className="product-card__icon" />
        <BarChartIcon className="product-card__icon" />
      </div>
      <div className="product-card__div5">
        <div className="product-card__div5-excl-button">
          <p className="product-card__original-price">
            {" "}
            RRP £{formattedOriginalPrice}
          </p>
          <div className="product-card__pricing--aligned">
            <p className="product-card__discounted-price">
              £{formattedNewPrice}
            </p>
            {isHighestRated ? (
              <p className="product-card__amount-saved">
                Save £
                {parseInt(formattedOriginalPrice - formattedNewPrice) < 2
                  ? (formattedOriginalPrice - formattedNewPrice).toFixed(2)
                  : parseInt(formattedOriginalPrice - formattedNewPrice)}
              </p>
            ) : null}
          </div>
          <ProductStock availableStock={stock} />
          <DeliveryCountdown timeRemaining={timeRemaining} />
          <div className="div5__additional">
            {formattedNewPrice >= 50 ? (
              <p>
                <span
                  className="material-icons"
                  style={{ fontWeight: "bold", marginTop: 0 }}
                >
                  done
                </span>
                FREE UK delivery
              </p>
            ) : null}
            {formattedNewPrice >= 100 ? (
              <p>
                <span
                  className="material-icons"
                  style={{ fontWeight: "bold", marginTop: 0 }}
                >
                  done
                </span>
                PayPal credit available
              </p>
            ) : null}
          </div>
        </div>
        <Button
          className="product-card__basket-button"
          text={
            <p>
              <span className="material-icons">shopping_cart</span> ADD TO
              BASKET
            </p>
          }
          onClick={() =>
            console.log(
              `Product ID: ${productID}, Price: £${formattedNewPrice}`
            )
          }
        />
      </div>
    </div>
  );
}
