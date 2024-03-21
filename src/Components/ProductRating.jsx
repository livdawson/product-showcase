export default function ProductRating({ rating }) {
  const filledStars = Math.round(rating);
  const remainder = rating - filledStars;
  const stars = [];
  for (let i = 0; i < 5; i++) {
    let starIcon = "";
    if (i < filledStars) {
      starIcon = "star";
    } else if (i === filledStars && remainder >= 0.25) {
      starIcon = "star_half";
    } else {
      starIcon = "star_border";
    }
    stars.push(
      <span key={i} className="material-icons">
        {starIcon}
      </span>
    );
  }

  return (
    <div className="product-card__rating">
      <span className="product-card__stars">{stars}</span>
      <p>100 Reviews</p>
    </div>
  );
}
