import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import ProductsSection from "../components/ProductsSection";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;

const CategoryTitle = styled.h1`margin: 20px;`;

const ContainerFilter = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
`;

const FilterName = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const SelectOption = styled.select`
    padding: 10px;
    margin-right: 20px;
    text-align: center;
`;

const Option = styled.option``;

export default function ProductList() {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <CategoryTitle>Suits</CategoryTitle>
            <ContainerFilter>
                <Filter>
                    <FilterName>Filter Products:</FilterName>
                    <SelectOption>
                        <Option disabled selected>Color</Option>
                        <Option>Black</Option>
                        <Option>White</Option>
                        <Option>Navy Blue</Option>
                        <Option>Dark Gray</Option>
                    </SelectOption>
                    <SelectOption>
                        <Option disabled selected>Size</Option>
                        <Option>X-Small</Option>
                        <Option>Small</Option>
                        <Option>Medium</Option>
                        <Option>Large</Option>
                        <Option>X-Large</Option>
                    </SelectOption>
                </Filter>
                <Filter>
                    <FilterName>Sort Products:</FilterName>
                    <SelectOption>
                        <Option selected>Latest</Option>
                        <Option>Lowest Price</Option>
                        <Option>Highest Price</Option>
                    </SelectOption>
                </Filter>
            </ContainerFilter>
            <ProductsSection />
            <Newsletter />
            <Footer />
        </Container>
    )
}
