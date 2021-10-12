import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
}
body {
    background-size : cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    align-items:center;
    justify-content: flex-start;
}

* {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  > p {
    color: rgba(255, 255, 255, 0.5);
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: Fascinate Inline, Haettenschweiller, "Arial Narrow Bold",
      sans-serif;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: 20ex;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease-in-out;

  button:hover {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25),
      inset 3px 3px 4px rgba(0, 0, 0, 0.25);
  }
  button {
    width: 300px;
    padding: 10px 0px;
    text-align: center;
    border: none;
    border-radius: 5px;
    box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.25);
    font-size: 28px;
    font-weight: 300;
    margin-bottom: 5px;
    user-select: none;
    cursor: pointer;
    z-index: 0;

    background: ${({ correct, userClicked }) =>
      correct
        ? "rgba(0,128,0, 0.8)"
        : !correct && userClicked
        ? "rgba(255,0,0, 0.8)"
        : "rgba(255, 255, 255, 0.8)"};
  }
  


  button span {
      z-index:1;
      color: ${({ correct, userClicked }) =>
      correct
        ? "white"
        : !correct && userClicked
        ? "white"
        : "black"};
  }
  }
`;
