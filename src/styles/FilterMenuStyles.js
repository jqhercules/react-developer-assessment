import styled from 'styled-components';

const FilterMenutyles = styled.section`
  width: 360px;
  margin: 0 auto;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    right: 30px;
    top: calc(50% - 8px);
    width: 12px;
    height: 12px;
    transform: rotate(-135deg);
    border-top: 2px solid #000;
    border-left: 2px solid #000;
    pointer-events: none;
  }

  .dropdown-btn {
    padding: 15px 20px;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 3px;
    cursor: pointer;
  }

  .dropdown-btn,
  .dropdown-content {
    border-radius: 3px;
    border: 1px solid #e2dff2;
    box-shadow: 0 5px 10px #e2dff2;
    background-color: #fff;
  }

  .dropdown-content {
    position: absolute;
    width: 100%;
    z-index: 100;
  }

  .dropdown-item {
    padding: 12px 10px;
    font-size: 14px;
    transition: background 450ms;
    cursor: pointer;

    &:hover {
      background-color: #f6f5fc;
    }
  }
`;

export default FilterMenutyles;
