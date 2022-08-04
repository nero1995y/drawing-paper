import React, { PureComponent } from 'react';
import Heading from '../../ui/Heading';
import Card from '../../ui/Card';

import SerachFilter from './SearchFilter';
import moduleName from 'module';

class List extends PureComponent {
  state = {
    transactions: [
      {
        id: 'btx_01',
        name: '비트코인(BTX)',
        totalPrice: '123,123,000,000원',
        currentPrice: '4,200,000원',
        datetime: '2019/01/20 08:23:22',
      },
    ],
  };
}

export default List;
