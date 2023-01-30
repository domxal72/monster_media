import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./sidebar";
import Products from "./products";
import Nav from "./nav";
import { breakSm } from "../theme";
import { nav } from "../data";

const Body = styled.div`
  background: ${({ theme }) => theme.colors.blue};
  @media only screen and (min-width: ${breakSm}px) {
    padding: 40px 20px;
  }
`;

const Main = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.white};
  max-width: 1350px;
  margin: 0px auto;
  padding: 0 15px;
  box-shadow: 0px 5px 15px #afb3c84d;
  border: 1px solid #eaeff9;
  @media only screen and (min-width: ${breakSm}px) {
    border-radius: 35px;
    padding: 30px 30px 30px 40px;
  }
`;

const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  @media only screen and (min-width: ${breakSm}px) {
    top: -15px;
    right: -15px;
    left: initial;
    box-shadow: 0px 5px 15px #afb3c84d;
    border: 1px solid #eaeff9;
    border-radius: 50%;
    position: absolute;
  }
`;

const PageHeader = styled.div`
  display: flex;
  font-size: 18px;
  justify-content: center;
  flex: 1;
  @media only screen and (min-width: ${breakSm}px) {
    display: none;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media only screen and (min-width: ${breakSm}px) {
    grid-template-columns: 1fr 3fr;
  }
`;

const Header = styled.div`
  margin: 0 -20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #eaeff9;
  @media only screen and (min-width: ${breakSm}px) {
    border: none;
  }
`;

const EmptyFlex = styled.div`
  width: 50px;
`;

export default function Layout() {
  const [routes, setRoutes] = useState(nav);
  function handleClick(e) {
    setRoutes(
      routes.map((route) => {
        return route.id === parseInt(e.target.id)
          ? { ...route, active: true }
          : { ...route, active: false };
      })
    );
  }
  return (
    <Body>
      <Main>
        <Header>
          <CloseButton>X</CloseButton>
          <PageHeader>Vyberte produkt</PageHeader>
          <EmptyFlex />
        </Header>
        <Nav routes={routes} handleClick={handleClick} />
        <Content>
          <Sidebar />
          <Products routes={routes} />
        </Content>
      </Main>
    </Body>
  );
}
