import styled from 'styled-components';

const Overlay = styled.div`
  ${props => props.isInactive && `display: none;`}
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
`;

export default Overlay;
