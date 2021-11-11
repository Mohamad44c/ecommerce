import styled from "styled-components";
import Product from "./Product";
import { ProductCatalog } from "../data";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export default function ProductsSection( ) {
    return (
        <Container>
            {ProductCatalog.map((item) => (
                <Product item={item} key={item.id} />
            ))} 
        </Container>
    )
}