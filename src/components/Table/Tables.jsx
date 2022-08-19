import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

const userList = {
  userResponseList: [
    {
      id: '1',
      username: '심준혁',
      email: 'wnsgur765z@naver.com',
      phone: '01022',
    },
    {
      id: '2',
      username: '아이유',
      email: 'wnsgur765z@naver.com',
      phone: '01021',
    },
  ],
};

const Tables = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>유저 이메일</Th>
            <Th>유저 이름</Th>
            <Th isNumeric>핸드폰 번호</Th>
          </Tr>
        </Thead>

        <Tbody>
          {userList.userResponseList.map(({ id, username, phone, email }) => (
            <Tr key={id}>
              <Td>{email}</Td>
              <Td>{username}</Td>
              <Td isNumeric>{phone}</Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default Tables;
