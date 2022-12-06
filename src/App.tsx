import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [visibleGoogs, setVisibleGoogs] = useState<Good[]>([]);

  const handleAllButtonClick = () => {
    getAll()
      .then(goods => setVisibleGoogs(goods));
  };

  const handleFiveButtonClick = () => {
    get5First()
      .then(goods => setVisibleGoogs(goods));
  };

  const handleRedButtonClick = () => {
    getRedGoods()
      .then(goods => setVisibleGoogs(goods));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleAllButtonClick}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFiveButtonClick}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleRedButtonClick}
      >
        Load red goods
      </button>

      <GoodsList goods={visibleGoogs} />
    </div>
  );
};
