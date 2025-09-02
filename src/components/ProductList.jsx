import ProductItem from "./ProductItem.jsx";

export default function ProductList({ products = [] }) {
    return (
        <section className="product-grid" aria-label="Product List">
            {products.map((p) => (
                <ProductItem key={p.id} product={p} />
            ))}
        </section>
    );
}