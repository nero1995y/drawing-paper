import React, { PureComponent } from 'react';
import Heading from '../../ui/Heading';
import InlineList from '../../ui/InlineList';

import Dashlet from './Dashlet';

class Overview extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Heading level={3}>로드 맵 트리</Heading>
        <InlineList>
          <Dashlet name="백엔드 엔드" priceLabel="4,216,000원" />
          <Dashlet name="이론" priceLabel="216,000원" />
          <Dashlet name="포토폴리오" priceLabel="3,000원" />
        </InlineList>
      </React.Fragment>
    );
  }
}

export default Overview;
