import React from "react";
import { products } from "../data";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
    return (
        <div className="product-page">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductPage;
