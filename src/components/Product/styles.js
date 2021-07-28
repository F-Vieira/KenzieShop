import styled from "styled-components";

export const ContainerItem = styled.div`
  margin: 3rem;
  background-color: #2a1f42;
  color: #f5f5f5;
  width: 250px;
  /* height: 350px; */
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
  }
  p {
    width: 180px;
    text-align: center;
    padding-bottom: 0.3rem;
    border-bottom: 2px solid #694ba3;
  }
  button {
    margin: 1rem 0;
  }
`;
