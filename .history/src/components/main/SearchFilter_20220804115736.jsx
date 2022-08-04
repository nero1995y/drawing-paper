import React, { PureComponent } from 'react';
import Form from '../../ui/Form';
import InlineList from '../../ui/InlineList';
import Text from '../../ui/Text';
import Select from '../../ui/Select';

class SerachFilter extends PureComponent {
  render() {
    return (
      <Form onSubmit={(values) => console.log(values)}>
        <Form.Consumer>
          {{ onChnage, values }} => (
          <InlineList spacingBetween={2} verticalAlign="bottom">
            <Text xlarge bold>
              검색
            </Text>

            <Select
              name="code"
              label="코인 코드"
              onChange={onChange}
              value={values['code']}
            ></Select>
          </InlineList>
          )
        </Form.Consumer>
      </Form>
    );
  }
}
