import { useContext } from 'react';
import myContext from '../context/context';
import styled from 'styled-components';
import { TiAdjustBrightness } from 'react-icons/ti';
import { WiMoonWaxingCrescent5 } from 'react-icons/wi';

const Button = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  cursor: pointer;

  & svg {
    width: 40px;
    height: auto;
    background: none;
    transition: 0.5s ease-in-out;
  }

  & svg:hover {
    transition: 0.5s ease-in-out;
    transform: scale(1.5);
  }
`;

export function ButtonLightOrDark() {
  const { darkMode, setDarkMode } = useContext(myContext).value;
  return (
    <Button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <TiAdjustBrightness /> : <WiMoonWaxingCrescent5 />}
    </Button>
  );
}
