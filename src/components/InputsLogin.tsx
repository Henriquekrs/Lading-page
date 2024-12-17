import { useContext } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import myContext from '../context/context';
import { LoginSocialMedia } from './LoginSocialMedia';

const lightTheme = {
  borderContainer: '#a1a6af',
  backgroundContainer: '#82868d98',
  inputBackground: '#b6bfc033',
  inputColor: '#000000',
  placeholderColor: '#3f3e3e',
  borderButton: '#a8dadc',
  backgroundButton: '#f1faee',
  colorButton: '#e63946',
};

const darkTheme = {
  borderContainer: '#3e5c76',
  backgroundContainer: '#1d2d4423',
  inputBackground: '#748cab20',
  inputColor: '#bdbdbd',
  placeholderColor: '#a2a1a1',
  borderButton: '#748cab',
  backgroundButton: '#063863',
  colorButton: '#f0ebd8',
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    font-family: "Alumni Sans Pinstripe", serif;
  font-weight: 400;
  font-style: normal;
    transition: background-color 0.5s ease, color 0.5s ease; /* Transição suave */
  }
`;

const Container = styled.body`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 13%;
  width: 23vw;
  height: 70vh;
  border: 1px solid ${(props) => props.theme.borderContainer};
  background: ${(props) => props.theme.backgroundContainer};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  align-items: center;
  border-radius: 15px;
  gap: 12px;
  box-shadow: -5px 5px 5px 0px #0000006e;

  transition: background-color 0.5s ease, border-color 0.5s ease; /* Transição suave */
`;

const Title = styled.h1`
  width: 18vw;
  font-size: 60px;
  text-align: start;
  position: relative;
  top: 70px;
  background: none;

  font-family: 'Jost', serif;
  font-weight: 400;
  font-style: normal;
  font-weight: 400;
`;

const SubTitle = styled.p`
  width: 18vw;
  position: relative;
  top: 50px;

  background: none;
  font-family: 'Jost', serif;
`;

const Inputs = styled.input`
  width: 18vw;
  height: 6vh;
  border: 1px solid #f0ebd8;
  border-radius: 7px;
  position: relative;
  top: 45px;
  background-color: ${(props) => props.theme.inputBackground};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  text-align: start;
  text-indent: 10px;
  font-family: 'Jost', serif;
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  letter-spacing: 2px;
  color: ${(props) => props.theme.inputColor};

  transition: background-color 0.5s ease; /* Suavidade ao hover */

  &:active {
    border: 1px solid #eb0c0c;
  }

  &::placeholder {
    color: ${(props) => props.theme.placeholderColor};
    font-size: 20px;

    transition: color 0.5s ease; /* Suavidade ao hover */
  }

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 18vw;
  height: 6vh;
  border: 1px solid ${(props) => props.theme.borderButton};
  background: ${(props) => props.theme.backgroundButton};
  border: none;
  border-radius: 7px;
  position: relative;
  top: 65px;
  cursor: pointer;

  text-transform: uppercase;
  font-size: 30px;
  font-family: 'Jost', serif;
  font-weight: 400;
  font-style: normal;
  color: ${(props) => props.theme.colorButton};

  transition: background-color 0.5s ease, color 0.5s ease; /* Suavidade ao hover */

  &:hover {
    background: #cf0101;
    color: #f1faee;
    transition: 0.5s;
  }

  &:active {
    background: #cc1a29;
    color: #f1faee;
  }
`;

const RecoveryPassword = styled.a`
  position: relative;
  top: 60px;
  font-size: 15px;
  font-family: 'Jost', serif;
  font-style: bold;
  font-weight: 500;
  color: #f0ebd8;
  background: none;
  text-decoration: none;
`;

export function InputsLogin() {
  const { darkMode } = useContext(myContext).value;
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Title>Sing In</Title>
        <SubTitle>Welcome to reality !</SubTitle>
        <Inputs type="text" placeholder="Email" />
        <Inputs type="password" placeholder="Password" />
        <Button>Login</Button>
        <RecoveryPassword href="">Forgot password ?</RecoveryPassword>
        <LoginSocialMedia />
      </Container>
    </ThemeProvider>
  );
}
