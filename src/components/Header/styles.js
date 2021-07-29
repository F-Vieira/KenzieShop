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
      justify-content: space-evenly;
      li {
        cursor: pointer;
        font-size: 1.3rem;
        border: 2px solid var(--light-purple);
        padding: 5px 10px;
        &:hover {
          background-color: var(--light-purple);
        }
      }
      li + li {
        position: ${(props) => (props.inCart ? "static" : "fixed")};
        right: ${(props) => (props.inCart ? "none" : "15px")};
        /* position: fixed; */
        /* right: 15px; */

        span {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: darkgreen;
          font-size: 13px;
          width: 20px;
          height: 20px;
          border-radius: 50%;

          position: ${(props) => (props.inCart ? "static" : "absolute")};
          right: ${(props) => (props.inCart ? "none" : "-9px")};
          bottom: ${(props) => (props.inCart ? "none" : "-11px")};
          /* position: absolute;
          right: -9px;
          bottom: -11px; */
        }
      }
    }
  }
`;
