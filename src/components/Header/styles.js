import styled from "styled-components";

export const ContainerHeader = styled.header`
  background-color: var(--very-dark-purple);
  color: var(--white);
  height: 50px;
  nav {
    height: 100%;
    ul {
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: space-evenly;
      li {
        font-size: 1.3rem;
        border: 2px solid var(--light-purple);
        padding: 5px 10px;
        &:hover {
          background-color: var(--light-purple);
        }
      }
    }
  }
`;
