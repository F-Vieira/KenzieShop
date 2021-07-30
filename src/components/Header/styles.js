import styled from "styled-components";

export const ContainerHeader = styled.header`
  background-color: var(--very-dark-purple);
  color: var(--white);
  height: 9vh;
  max-height: 9vh;
  nav {
    height: 100%;
    ul {
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: ${(props) =>
        props.inCart ? "space-between" : "flex-start"};
      margin: 0 2rem;

      li {
        cursor: pointer;
      }

      li:first-child {
        font-size: 1.7rem;
        font-weight: bold;
        letter-spacing: 4px;
        font-family: "Aguafina Script", cursive;
        text-shadow: 6px 0px 3px rgba(105, 75, 163, 0.83);
        &:hover {
          color: var(--light-purple);
        }
      }

      li + li {
        position: ${(props) => (props.inCart ? "relative" : "fixed")};
        right: ${(props) => (props.inCart ? "none" : "2rem")};

        svg {
          width: 30px;
          height: 30px;
          &:hover {
            color: var(--light-purple);
          }
        }
        span {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: darkgreen;
          font-size: 13px;
          width: 20px;
          height: 20px;
          border-radius: 50%;

          position: absolute;
          right: -9px;
          bottom: -8px;
        }
      }
    }
  }
`;
