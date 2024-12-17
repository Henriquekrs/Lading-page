import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  justify-content: flex-end;
  gap: 70px;
  width: 80vw;
  position: absolute;
  top: 17px;
  background: none;
`;

const Title = styled.h1`
  font-size: 20px;
  font-family: 'Jost', serif;
  font-weight: 400;

  text-align: center;
  background: none;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);
    transition: 0.5s ease-in-out;
    border-bottom: 2px solid #003b00ae;
  }
`;

export function Header() {
  return (
    <Container>
      <Title>What's real ?</Title>
      <Title>Red pill</Title>
      <Title>What is matrix?</Title>
    </Container>
  );
}
