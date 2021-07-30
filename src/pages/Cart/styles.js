import styled from "styled-components";

export const ContainerCart = styled.main`
  min-height: 91vh;
  background-color: var(--light-purple);
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;

  section:first-child {
    font-family: var(--text-font-secundary);
    width: 250px;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 1.5rem;
    padding: 15px 0;
    border-radius: 50px;
    background-color: var(--very-dark-purple);
    color: var(--white);
    box-shadow: 0px 3px 15px 5px rgba(0, 0, 0, 0.4);
    line-height: 2;
    h2 {
      font-size: 1.3rem;
    }

    p {
      font-size: 0.9rem;
      span {
        font-weight: bold;
        color: #a3ffa1;
      }
    }

    button {
      margin-top: 1rem;
    }
  }

  section + section {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 30px 0;
    div {
      justify-self: center;
    }
    .empty_cart {
      color: #f5f5f540;
      font-family: var(--text-font-secundary);
      text-align: center;
      width: 255px;
      height: 135px;
      h1 {
        margin-bottom: 2rem;
        font-size: 2rem;
      }
      svg {
        font-size: 4rem;
      }
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    section:first-child {
      height: 190px;
      margin-left: 1rem;
    }
    section + section {
      flex: 1;
      grid-template-columns: 1fr 1fr;

      div {
        width: 225px;
        height: 426px;
        max-height: 426px;
        img {
          width: 150px;
          height: 200px;
        }
      }
      .empty_cart {
        grid-column: 1/5;
        align-self: center;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    section + section {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media screen and (min-width: 1440px) {
    section + section {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`;
