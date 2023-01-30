import styled from "styled-components";

export default Text = styled.p`
  font-size: ${(props) => props.size ?? "18"}px;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  color: ${(props) => props.color ?? "black"};
  text-align: ${(props) => props.align ?? "left"};
`;

export const InlineText = styled(Text)`
  display: inline-block;
  font-weight: bold;
`;
