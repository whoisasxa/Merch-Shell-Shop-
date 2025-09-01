import { useState } from "react";
import ProductList from "./components/ProductList.jsx";
import productsSeed from "./data/products.js";

export default function Ecomm() {
    // State: list of products (id, name, price, description, category, image)
    const [products] = useState(productsSeed);

    return (
        <div className="app-shell">
            <header className="app-header">
                <div className="brand">minimal<span>shop</span></div>
                <p className="tagline">Cute. Clean. Composable.</p>
            </header>

            <main>
                <section className="intro">
                    <h1>Featured Products</h1>
                    <p>
                        This demo shows a simple **React component hierarchy** with state in the
                        parent and data flowing down as props. No click handlers yet—just clean
                        composition and styling.
                    </p>
                </section>

                <ProductList products={products} />
            </main>

            <footer className="app-footer">
                <small>
                    Built with React & Vite • Designed for teaching components, props, and state
                </small>
            </footer>
        </div>
    );
}