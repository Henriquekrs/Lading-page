import { InputsLogin } from '../components/InputsLogin';
import styled from 'styled-components';

import { ButtonLightOrDark } from '../components/ButtonLightOrDark';
import { TitlePage } from '../components/TitlePage';
import { Header } from '../components/Header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(270deg, #3c0000 0%, #000000 50%, #008f11 115%);
  justify-content: center;
  align-items: center;
`;

export function Login() {
  return (
    <Container>
      <Header />
      <InputsLogin />
      <ButtonLightOrDark />
      <TitlePage />
    </Container>
  );
}
