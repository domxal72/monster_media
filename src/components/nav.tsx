import React from "react";
import styled from "styled-components";
import { breakSm } from "../theme";

const NavWrapper = styled.div`
  display: flex;
  margin: 30px 0;
  @media only screen and (min-width: ${breakSm}px) {
    margin-top: 0;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1px;
  border: 1px solid #eaeff9;
  border-radius: 50px;
  overflow: hidden;
  background: #eaeff9;
  @media only screen and (min-width: ${breakSm}px) {
    width: auto;
  }
`;

const NavTab = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex: 1;
  background: ${({ active, theme }) =>
    active ? theme.colors.blue : theme.colors.white};
  color: ${({ active, theme }) =>
    active ? theme.colors.white : theme.colors.blue};
  padding: 10px;
  @media only screen and (min-width: ${breakSm}px) {
    padding: 10px 30px;
  }
`;

export default function Nav({ routes, handleClick }) {
  return (
    <NavWrapper>
      <NavContainer>
        {routes.map(({ id, text, active }) => (
          <NavTab key={id} id={id} active={active} onClick={handleClick}>
            {text}
          </NavTab>
        ))}
      </NavContainer>
    </NavWrapper>
  );
}
