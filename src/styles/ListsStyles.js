import styled from 'styled-components';
import { theme } from '../theme/theme';

const ListStyles = styled.section`
  width: 100%;
  padding: 50px 0;

  .main-title {
    font-size: 32px;
    font-weight: 600;
    color: #10103e;
    text-align: center;
    margin-bottom: 50px;
  }

  .lists {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    margin-top: 50px;

    &__title {
      font-size: 22px;
      width: 100%;
      text-transform: capitalize;
      margin-bottom: 20px;
      color: #10103e;
      font-weight: 500;
      line-height: 1.4;
    }

    &__item {
      width: 100%;
      transition: transform 450ms;
      margin: 0 0 20px;
      background-color: #fff;
      padding: 25px;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      border-radius: 10px;
      box-shadow: 0 5px 10px #e2dff2;
      cursor: pointer;
      @media ${() => theme.breakpoints.tabletLarge} {
        width: calc((100% / 2) - 10px);
      }

      &:hover {
        transform: scale(1.04);
      }
    }

    &__media {
      background-color: #f6f5fc;
      margin-right: 14px;
      border-radius: 50%;
      max-width: 40px;
    }

    &__author {
      display: flex;
      align-items: center;

      h4 {
        font-weight: 600;
        color: #706e76;
        font-size: 14px;
      }
    }
  }
`;

export default ListStyles;
