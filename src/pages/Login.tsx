import { useContext } from 'react';
import { InputsLogin } from '../components/InputsLogin';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import myContext from '../context/context';
import { ButtonLightOrDark } from '../components/ButtonLightOrDark';

const lightTheme = {
  background: '#a8dadc',
};

const darkTheme = {
  background: '#0d1321',
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.background};
    font-family: 'Alumni Sans Pinstripe', sans-serif;

    transition: background-color 0.5s ease; /* Transição suave */
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.background};
  justify-content: center;
  align-items: center;

  transition: background-color 0.5s ease; /* Transição suave */
`;

export function Login() {
  const { darkMode } = useContext(myContext).value;
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <InputsLogin />
        <ButtonLightOrDark />
      </Container>
    </ThemeProvider>
  );
}
