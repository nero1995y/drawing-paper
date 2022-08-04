import React, { PureComponent } from 'react';
import Heading from '../../ui/Heading';
import Card from '../../ui/Card';

import SerachFilter from './SearchFilter';
import Table from './Table';

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

  render() {
    const { transactions } = this.state;

    return (
      <div>
        <Heading level={3}>거래 현황</Heading>
        <Card vertical={4} horizontal={4}>
          <SerachFilter />
        </Card>
        <Card>
          <Table transactions={transactions} />
        </Card>
      </div>
    );
  }
}

export default List;
