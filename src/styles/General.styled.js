import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.columnBased ? "column" : "row")};
  height: 80vh;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 0 2rem;
  text-align: center;
`;

export const Title = styled.h1`
  color: ${(props) =>
    props.primary ?  props.theme.colors.secondary : props.theme.colors.text};
  font-size: 3rem;
  font-family: "Cinzel", serif;
  background-color: transparent;
`;

export const Subtitle = styled.h1`
  color: ${(props) =>
    props.primary ? props.theme.colors.secondary : props.theme.colors.text};
  font-size: 1.5rem;
  font-weight: 200;
  background-color: transparent;
  padding: 10px;
`;
