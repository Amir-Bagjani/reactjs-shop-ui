import { useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile, tablet } from "../responsive";
import { popularProducts } from "../data";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Close } from "@material-ui/icons";

const Container = styled.div``;
const Title = styled.h2`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${tablet({
    display: "flex",
    flexDirection: "column",
  })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: 0 })}
`;
const Select = styled.select`
  padding: 4px 10px;
  margin: 0 20px 0 0;
  font-size: 18px;
  ${tablet({ margin: "5px 0 " })}
`;
const Option = styled.option`
  padding: 10px;
  font-size: 18px;
`;
const FilterSpan = styled.div`
  display: flex;
  gap: 8px;
`;

export default function ProductListPage() {
  const { category } = useParams();
  const [data, setData] = useState(popularProducts.filter((i) => i.cat === category));
  const [filterProduct, setFilterProduct] = useState(data);
  const [filterData, setFilterData] = useState(null);
  const [sort, setSort] = useState("newest");

  const handleFilter = (e) => {
    if (e.target.value !== "") {
      setFilterData({ ...filterData, [e.target.name]: e.target.value });
    }
  };

  //filter with object
  useEffect(() => {
    filterData &&
      setFilterProduct(
        data.filter((item) =>
          Object.entries(filterData).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [filterData]);

  //sort
  useEffect(() => {
    if(sort === "newest") setFilterProduct((prev) => [...prev].sort((a,b) => a.createdAt - b.createdAt))
    if(sort === "asc") setFilterProduct((prev) => [...prev].sort((a,b) => a.price - b.price))
    if(sort === "desc") setFilterProduct((prev) => [...prev].sort((a,b) => b.price - a.price))
  }, [sort]);

  //clear filter
  const clearFilter = () => {
    setFilterProduct(data)
    setFilterData(null)
  }

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{category.toUpperCase()}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilter}>
            <Option value="">Color</Option>
            <Option value={`gray`}>Gray</Option>
            <Option value={`lightgray`}>Lightgray</Option>
            <Option value={`black`}>Black</Option>
            <Option value={`red`}>Red</Option>
            <Option value={`darkblue`}>Darkblue</Option>
            <Option value={`yellow`}>Yellow</Option>
            <Option value={`pink`}>Pink</Option>
            <Option value={`green`}>Green</Option>
          </Select>
          <Select name="size" onChange={handleFilter}>
            <Option value="">Size</Option>
            <Option value={`sm`}>small</Option>
            <Option value={`lg`}>large</Option>
            <Option value={`xl`}>X-large</Option>
            <Option value={`xxl`}>XX-large</Option>
          </Select>
          {filterData && (
            <>
              <FilterSpan>
                <span onClick={clearFilter}><Close style={{ color: `red`, cursor: `pointer` }} /></span>
                <span>
                  Your filter(s) :
                  {filterData.color && `Color : ${filterData.color} `}
                  {filterData.size && ` Size : ${filterData.size}`}
                </span>
              </FilterSpan>
            </>
          )}
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select value="sm1" onChange={e=>setSort(e.target.value)}>
            <Option value={`newest`}>Newest</Option>
            <Option value={`asc`}>Price(asc)</Option>
            <Option value={`desc`}>Price(desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products data={filterProduct} />
      <Newsletter />
      <Footer />
    </Container>
  );
}
