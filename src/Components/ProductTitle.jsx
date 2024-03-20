export default function ProductTitle({ title }) {
    if (title.charAt(0) === '-') {
        title = title.slice(1);
      }
      
      const capitalisedTitle = title
      .split(" ")
      .map((word) => word.slice(0, 1).toUpperCase(0) + word.slice(1))
      .join(" ")

      return (
        <h2 className="product-card__title">{capitalisedTitle}</h2>
      )
}