import React from "react";
import styled from "styled-components";
import { breakSm } from "../theme";
import { filters, products } from "../data";

const ContentWrapper = styled.div`
  position: relative;
  overflow: hidden;
  @media only screen and (min-width: ${breakSm}px) {
    padding: 0 20px;
  }
`;

const ContentHeader = styled.div`
  font-size: 18px;
  margin-top: 20px;
  @media only screen and (min-width: ${breakSm}px) {
    font-size: 25px;
    margin-top: 0;
    padding: 0 20px;
  }
`;

const FilterWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 20px 10px;
  margin-bottom: 20px;
  justify-content: center;
  @media only screen and (min-width: ${breakSm}px) {
    padding: 20px;
  }
`;

const FilterList = styled.div`
  display: flex;
  gap: 30px;
  @media only screen and (min-width: ${breakSm}px) {
    gap: 18px;
  }
`;

const FilterItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 42px;
  box-shadow: 0px 5px 15px #afb3c84d;
  border-radius: 10px;
  @media only screen and (min-width: ${breakSm}px) {
    width: 130px;
    height: 115px;
  }
`;

const FilterImg = styled.div`
  width: 30px;
  height: 30px;
  background: black;
  @media only screen and (min-width: ${breakSm}px) {
    width: 50px;
    height: 50px;
  }
`;

const FilterName = styled.div`
  position: absolute;
  bottom: -20px;
  color: ${({ theme }) => theme.colors.black};
  @media only screen and (min-width: ${breakSm}px) {
    position: relative;
    bottom: 0;
    margin: 10px;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 8px;
  row-gap: 20px;
  @media only screen and (min-width: ${breakSm}px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 30px;
  }
`;

const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const ProductImg = styled.div`
  width: 80px;
  height: 150px;
  margin: 20px;
  background: black;
  align-self: center;
`;

const Available = styled.button`
  font-size: 10px;
  background: ${({ theme }) => theme.colors.lightGreen};
  color: ${({ theme }) => theme.colors.green};
  padding: 5px 8px;
  border-radius: 5px;
  @media only screen and (min-width: ${breakSm}px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  margin-top: 5px;
  font-size: 10px;
  @media only screen and (min-width: ${breakSm}px) {
    font-size: 12px;
  }
  color: ${({ theme }) => theme.colors.grey};
`;

const Price = styled.div`
  margin-top: 20px;
  font-size: 14px;
  @media only screen and (min-width: ${breakSm}px) {
    font-size: 16px;
  }
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddButton = styled.button`
  margin-top: 10px;
  align-self: flex-start;
  background: ${({ theme }) => theme.colors.red};
  color: white;
  border-radius: 25px;
  padding: 15px;
`;

const ContentTab = () => {
  return (
    <ContentWrapper>
      <ContentHeader>Nábytek</ContentHeader>
      <FilterWrapper>
        <FilterList>
          {filters.map((filter, index) => (
            <FilterItem key={index}>
              <FilterImg />
              <FilterName>{filter}</FilterName>
            </FilterItem>
          ))}
        </FilterList>
      </FilterWrapper>
      <ProductGrid>
        {products.map(({ id, available, name, price }) => (
          <ProductItem key={id}>
            <TopContainer>
              <ProductImg />
              <Available>{available}</Available>
              <Description>{name}</Description>
            </TopContainer>
            <BottomContainer>
              <Price>{price}</Price>
              <AddButton>+ Do studia</AddButton>
            </BottomContainer>
          </ProductItem>
        ))}
      </ProductGrid>
    </ContentWrapper>
  );
};

export default function Products({ routes }) {
  let [route] = routes.filter((route) => route.active);
  let Component;
  switch (route.id) {
    case 1:
      Component = <ContentTab />;
      break;
    case 2:
      Component = <div>Tab 2</div>;
      break;
    case 3:
      Component = <div>Tab 3</div>;
      break;

    default:
      Component = <ContentTab />;
      break;
  }
  return Component;
}
