import { useContext } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import myContext from '../context/context';

const lightTheme = {
  borderContainer: '#536a8b',
  backgroundContainer: '#1d3557',
  inputBackground: '#a8dadc',
  inputColor: '#000000',
  borderButton: '#a8dadc',
  backgroundButton: '#f1faee',
  colorButton: '#e63946',
};

const darkTheme = {
  borderContainer: '#3e5c76',
  backgroundContainer: '#1d2d44',
  inputBackground: '#748cab',
  inputColor: '#bdbdbd',
  borderButton: '#748cab',
  backgroundButton: '#3e5c76',
  colorButton: '#f0ebd8',
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    font-family: 'Alumni Sans Pinstripe', sans-serif;
    transition: background-color 0.5s ease, color 0.5s ease; /* Transição suave */
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 60vh;
  border: 1px solid ${(props) => props.theme.borderContainer};
  background: ${(props) => props.theme.backgroundContainer};
  align-items: center;
  border-radius: 15px;
  gap: 10px;
  box-shadow: 15px 18px 20px 5px #0000006e;

  transition: background-color 0.5s ease, border-color 0.5s ease; /* Transição suave */
`;

const Title = styled.h1`
  width: 18vw;
  font-size: 60px;
  text-align: start;
  position: relative;
  top: 70px;
  background: none;

  font-family: 'Alumni Sans Pinstripe', sans-serif;
  font-weight: 400;
  font-style: normal;
`;

const Inputs = styled.input`
  width: 18vw;
  height: 6vh;
  border: none;
  border-radius: 8px;
  position: relative;
  top: 100px;
  background-color: ${(props) => props.theme.inputBackground};

  text-align: center;
  font-family: 'Alumni Sans Pinstripe', sans-serif;
  font-size: 20px;
  letter-spacing: 2px;
  color: ${(props) => props.theme.inputColor};
  font-weight: bold;

  transition: background-color 0.5s ease; /* Suavidade ao hover */

  &:active {
    border: 1px solid #eb0c0c;
  }

  &::placeholder {
    color: #434343;
    font-size: 20px;
    font-weight: bold;
  }

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 35%;
  height: 10%;
  border: 1px solid ${(props) => props.theme.borderButton};
  background: ${(props) => props.theme.backgroundButton};
  border-radius: 10px;
  position: relative;
  top: 150px;
  cursor: pointer;

  text-transform: uppercase;
  font-size: 30px;
  font-family: 'Alumni Sans Pinstripe', sans-serif;
  font-weight: bold;
  color: ${(props) => props.theme.colorButton};

  transition: background-color 0.5s ease, color 0.5s ease; /* Suavidade ao hover */

  &:hover {
    background: #e27982;
    color: #f1faee;
    transition: 0.5s;
  }

  &:active {
    background: #cc1a29;
    color: #f1faee;
  }
`;

export function InputsLogin() {
  const { darkMode } = useContext(myContext).value;
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Title>Sing In</Title>
        <Inputs type="text" placeholder="Email" />
        <Inputs type="password" placeholder="Password" />
        <Button>Login</Button>
      </Container>
    </ThemeProvider>
  );
}
