import styled from "styled-components";

export const ContainerItem = styled.div`
  background-color: var(--dark-purple);
  color: var(--white);
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  box-shadow: 0px 3px 20px 10px rgba(0, 0, 0);

  img {
    width: 180px;
    height: 250px;
    margin-top: 1.5rem;
  }

  ul {
    display: flex;
    margin: 1rem 0 0.5rem;
    li {
      color: yellow;
      font-size: 1.3rem;
      cursor: pointer;
      &:hover {
        color: yellow;
      }
    }
  }

  h2 {
    margin: 0.2rem 0 1rem;
    font-size: 15px;
    text-align: center;
    width: 200px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    width: 180px;
    text-align: center;
    padding-bottom: 0.3rem;
    border-bottom: 2px solid var(--light-purple);
  }
  button {
    margin: 1rem 0;
    height: 40px;
    width: 40px;
    padding: 0;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      font-size: 1.5rem;
      color: var(--white);
    }
  }
`;
