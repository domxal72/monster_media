import React, { useState } from "react";
import styled from "styled-components";
import { categories } from "../data";

const CategoryWrapper = styled.div`
  min-width: 200px;
`;

const CategoryContainer = styled.div`
  flex-direction: column;
  display: flex;
  border: 1px solid #eaeff9;
  border-radius: 10px;
  padding: 20px;
`;

const Caret = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  cursor: pointer;
  border-top: 10px solid black;
  transform: ${({ show }) => (show ? "rotate(180deg)" : "rotate(0deg)")};
`;

const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CategorySubHeader = styled.div`
  border-top: 1px solid #eaeff9;
  border-bottom: 1px solid #eaeff9;
  padding: 10px 0;
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: 12px;
`;

const ToggleContainer = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
`;

const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const CategoryItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CategoryName = styled.div`
  color: ${({ theme }) => theme.colors.grey};
`;

const CategoryNumber = styled.div`
  color: ${({ theme }) => theme.colors.lightGrey};
`;

export default function Sidebar() {
  const [show, setShow] = useState(true);
  function handleClick() {
    setShow(!show);
  }
  return (
    <CategoryWrapper>
      <CategoryContainer>
        <CategoryHeader onClick={handleClick}>
          Kategorie
          <Caret show={show} />
        </CategoryHeader>
        <ToggleContainer show={show}>
          <CategorySubHeader>Všechny produkty</CategorySubHeader>
          <CategoryList>
            {categories.map(({ name, number }, index) => (
              <CategoryItem key={index}>
                <CategoryName>{name}</CategoryName>
                <CategoryNumber>{number}</CategoryNumber>
              </CategoryItem>
            ))}
          </CategoryList>
        </ToggleContainer>
      </CategoryContainer>
    </CategoryWrapper>
  );
}
