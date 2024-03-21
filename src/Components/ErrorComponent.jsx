export default function ErrorComponent({ message }) {
  console.error(message);

  return (
    <div className="error">
      <p>Oops! Something went wrong. Please try again later.</p>
    </div>
  );
};