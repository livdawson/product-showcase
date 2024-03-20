export default function ProductPrice({ price, discountPercentage }) {
  let formattedOriginalPrice = price.toFixed(2);
  if (!formattedOriginalPrice.includes(".")) {
    formattedOriginalPrice += ".00";
  }

  const formattedNewPrice = (price * (1 - discountPercentage / 100)).toFixed(2);

  return (
    <div>
      <p className="product-card__original-price">
        {" "}
        RRP £{formattedOriginalPrice}
      </p>
      <p className="product-card__discounted-price">£{formattedNewPrice}</p>
    </div>
  );
}
