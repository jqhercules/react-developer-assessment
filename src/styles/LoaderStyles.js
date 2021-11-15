import styled from 'styled-components';

const LoaderStyles = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  border-radius: 100%;
  animation: loading 1s infinite linear;
  margin: 100px auto;

  &::after {
    content: '';
    box-sizing: border-box;
    display: inline-block;
    position: absolute;
    width: 110%;
    height: 110%;
    top: -5%;
    left: -5%;
    right: 0;
    bottom: 0;
    border: 5px solid transparent;
    border-radius: 100%;
    box-shadow: 0.08rem 0.08rem 0.08rem #333;
    opacity: 0.6;
  }

  @keyframes loading {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
`;

export default LoaderStyles;
