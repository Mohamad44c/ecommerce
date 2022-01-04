import { useLocation } from "react-router";
import { useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import ProductsSection from "../components/ProductsSection";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;

const CategoryTitle = styled.h1`
    margin: 20px;
    ${'' /* ${mobile({ margin: "10px" })} */}
`;

const ContainerFilter = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterName = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
`;

const SelectOption = styled.select`
    padding: 10px;
    margin-right: 20px;
    text-align: center;
    ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

export default function ProductList() {
    const location = useLocation();
    const category = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("Latest");

    const handleFilters = (e) => {
        // add toLowerCase to value if you named them in lowercase in the DB
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    }; 
    return (
        <Container>
            <Navbar />
            <Announcement />
            <CategoryTitle>{category}</CategoryTitle>
            <ContainerFilter>
                <Filter>
                    <FilterName>Filter Products:</FilterName>
                    <SelectOption name="color" onChange={handleFilters}>
                        <Option disabled >Color</Option>
                        <Option>black</Option>
                        <Option>white</Option>
                        <Option>navyblue</Option>
                        <Option>gray</Option>
                    </SelectOption>
                    <SelectOption name="size" onChange={handleFilters}>
                        <Option disabled >Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </SelectOption>
                </Filter>
                <Filter>
                    <FilterName>Sort Products:</FilterName>
                    <SelectOption onChange={(e) => setSort(e.target.value)}>
                        <Option value="Latest">Latest</Option>
                        <Option value="Lowest to Highest">Lowest to Highest</Option>
                        <Option value="Highest to Lowest">Highest to Lowest</Option>
                    </SelectOption>
                </Filter>
            </ContainerFilter>
            <ProductsSection category={category} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </Container>
    )
}
