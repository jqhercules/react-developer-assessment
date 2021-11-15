import React from 'react';

import LoadMoreStyles from '../styles/LoadMoreStyles';

const LoadMore = ({ onClick }) => {
  const loadMoreHandler = () => {
    onClick();
  };

  return <LoadMoreStyles onClick={loadMoreHandler}>Load more</LoadMoreStyles>;
};

export default LoadMore;
