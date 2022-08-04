import React, { PureComponent } from 'react';
import Form from '../../ui/Form';
import InlineList from '../../ui/InlineList';
import Text from '../../ui/Text';
import Select, { Option } from '../../ui/Select';
import Input from '../../ui/Input';
import Button from '../../ui/Button';

class SerachFilter extends PureComponent {
  render() {
    return (
      <Form onSubmit={(values) => console.log(values)}>
        <Form.Consumer>
          {({ onChange, values }) => (
            <InlineList spacingBetween={2} verticalAlign="bottom">
              <Text xlarge bold>
                검색
              </Text>

              <Select
                name="code"
                label="코인 코드"
                onChange={onChange}
                value={values['code']}
              >
                <Option label="선택해주세요" />
                <Option label="비트코인" value="BTX" />
                <Option label="이더리움" value="ETH" />
                <Option label="두잇코인" value="DOIT" />
              </Select>

              <Input
                name="minAmount"
                label="최소거래가"
                onChange={onChange}
                value={values['minAmount']}
              ></Input>
              <Input
                name="maxAmount"
                label="최대 거래가"
                onChange={onChange}
                value={values['maxAmount']}
              >
                <Button type="submit" primary>
                  검색
                </Button>
              </Input>
            </InlineList>
          )}
        </Form.Consumer>
      </Form>
    );
  }
}

SerachFilter.propTypes = {};

export default SerachFilter;
