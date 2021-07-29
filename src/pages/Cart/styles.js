import styled from "styled-components";

export const ContainerCart = styled.main`
  min-height: 91vh;
  background-color: var(--light-purple);
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;

  section:first-child {
    width: 250px;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 1.5rem;
    padding: 15px 0;
    border-radius: 50px;
    background-color: var(--very-dark-purple);
    color: var(--white);
    box-shadow: 0px 3px 15px 5px rgba(0, 0, 0, 0.4);

    h2 + p {
      margin: 10px 0;
    }
    p {
      span {
        font-weight: bold;
        color: #090;
      }
    }
  }

  section + section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px 0;
    div {
      justify-self: center;
      width: 140px;
      max-height: 350px;
      img {
        width: 80px;
      }
      h2 {
        width: 100px;
      }
      p {
        width: 80px;
      }
      button {
        width: 100px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    section:first-child {
      height: 120px;
      margin-left: 1rem;
    }
    section + section {
      flex: 1;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media screen and (min-width: 1024px) {
    section + section {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }

  @media screen and (min-width: 1155px) {
    section + section {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  }
`;
