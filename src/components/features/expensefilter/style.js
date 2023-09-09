import styled from "styled-components";
const Dropdown = styled.select`
  padding: 0.6rem 1rem;
  border-radius: 1.5rem;
  outline: none;
  color: #eee;
  background-color: ${(props) => (props.bg ? props.bg : "#333")};
`;

export { Dropdown };
