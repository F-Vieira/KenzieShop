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
    margin-top: 1.5rem;
  }
  h2 {
    margin: 1rem 0;
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
  }
`;
