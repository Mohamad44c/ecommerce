import styled from "styled-components";
import { ProductCategories } from "../data";
import Category from "./Category";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;
export default function Categories() {
    return (
        <div>
            <Container>
                {ProductCategories.map(product => (
                    <Category product={product} key={product.id} />
                ))}
            </Container>
        </div>
    )
}
