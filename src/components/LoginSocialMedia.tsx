import styled from 'styled-components';
import { FaFacebook } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: space-evenly;
  top: 70px;
  width: 12vw;
  height: 65px;
  background: none;
  border-top: 1px solid #f0ebd8;
`;

const Icons = styled.button`
  background: none;
  border: none;
  transition: 0.5s ease-in-out;

  & svg {
    width: 35px;
    height: auto;
    background: none;
  }

  &:hover {
    cursor: pointer;
    color: #f0ebd8;
    transform: scale(1.1);
    transition: 0.5s ease-in-out;
  }
`;

export function LoginSocialMedia() {
  return (
    <Container>
      <Icons>{<FaFacebook />}</Icons>
      <Icons>{<FaGoogle />}</Icons>
      <Icons>{<FaXTwitter />}</Icons>
    </Container>
  );
}
