import styled from "styled-components";

export const ContainerProducts = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px 0;
  background-color: var(--light-purple);
  padding: 1.5rem 0;
  div {
    justify-self: center;
  }

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    div {
      justify-self: center;
    }
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    div {
      justify-self: center;
    }
  }

  @media screen and (min-width: 1155px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    div {
      justify-self: center;
    }
  }

  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    div {
      justify-self: center;
    }
  }
`;
