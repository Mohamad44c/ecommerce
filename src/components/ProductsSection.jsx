import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
// import { ProductCatalog } from "../data"; dummy data saved as json in local folder

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export default function ProductsSection({ category, filters, sort }) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    // display products based on category, if no category => display all products
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    category
                        ? `http://localhost:3000/api/products?category=${category}`
                        : "http://localhost:3000/api/products"
                );
                setProducts(res.data);
                // console.log(res);
            } catch (error) {
                console.log(error);
            }
        };
        getProducts();
    }, [category]);

    // display products based on filters
    useEffect(() => {
        category &&
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value)
                    )
                )
            );
    }, [products, category, filters]);

    // sort products based on product price and sort newest products 
    // eg. low to high and high to low
    useEffect(() => {
        if (sort === "Latest") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        } else if (sort === "Lowest to Highest") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            );
        } else {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort]);

    return (
        <Container>

            {category
                ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
                : products
                    .slice(0, 8)
                    .map((item) => <Product item={item} key={item.id} />)}

        </Container>
    )
}