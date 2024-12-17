import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 70vh;
  align-items: center;
  border-left: 1px solid #003b00ae;
  background: none;
  position: absolute;
  right: 0;
`;

const Title = styled.h1`
  font-size: 80px;
  font-family: 'Jost', serif;
  font-weight: 400;

  text-align: center;
  background: none;
  position: relative;
  top: 20%;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-family: 'Jost', serif;
  font-weight: 400;
  width: 80%;

  text-align: center;
  background: none;
  position: relative;
  top: 20%;
`;

export function TitlePage() {
  return (
    <Container>
      <Title>Project Matrix</Title>
      <SubTitle>
        You need to understand, most of these people are not ready to awaken.
        And many of them are so inert, so desperately dependent on the system,
        that they will fight to protect it.
      </SubTitle>
    </Container>
  );
}
