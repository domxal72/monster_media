import React from "react";
import styled from "styled-components";

const IconButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #52ac38;
  cursor: pointer;
`;

export default function IconButton({ svgIcon }) {
  return <IconButtonWrapper>{svgIcon}</IconButtonWrapper>;
}
