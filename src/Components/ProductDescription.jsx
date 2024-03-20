export default function ProductDescription({ description }) {
    const descriptionItems = description.split(/\| |• |\. |- /);
  
    return (
      <ul className="product-card__description">
        {descriptionItems.map((item, index) => (
          <li key={index}>
            <span
              className="material-icons"
              style={{ fontWeight: "bold" }}
            >
              done
            </span>
            {item}
          </li>
        ))}
      </ul>
    );
  }