export default function ProductItem({ product }) {
  const { name, price, description, category, image } = product;

  return (
    <article className="product-card">
      <div className="product-media">
        <img src={image} alt={name} loading="lazy" />
      </div>
      <div className="product-body">
        <h2 className="product-name">{name}</h2>
        <p className="product-desc">{description}</p>
        <div className="product-meta">
          <span className="product-category" aria-label="Category">
            {category}
          </span>
          <span className="product-price" aria-label="Price">
            ${price.toFixed(2)}
          </span>
        </div>
      </div>
    </article>
  );
}
