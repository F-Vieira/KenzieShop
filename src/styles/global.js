import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    --very-dark-purple: #1e1032;
    --dark-purple: #2a1f42;
    --light-purple: #694ba3;
    --white: #f5f5f5;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button{
    cursor: pointer;
  }
  a{
    text-decoration: none;
  }
  li{
    list-style: none;
  }
`;
