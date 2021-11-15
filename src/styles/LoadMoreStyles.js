import styled from 'styled-components';

const LoadMoreStyles = styled.section`
  background-color: #24246f;
  color: white;
  padding: 15px 20px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  margin-top: 50px;
  text-transform: capitalize;
  box-shadow: rgba(33, 33, 107, 0.35);
  transition: background 450ms;

  &:hover {
    background-color: #10103e;
  }
`;
export default LoadMoreStyles;
