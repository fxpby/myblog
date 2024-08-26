import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  TableCaption,
} from '@chakra-ui/react';

export default function BaseTable(props) {
  const {tableIndex, tableData, tableColumn, unit} = props;
  const toPercent = (num) => {
    return `${Number(num * 100).toFixed(2)}%`;
  };
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>{`中周期-${tableIndex + 1}`}</TableCaption>
        <Thead>
          <Tr>
            {tableColumn.map((col) => (
              <Th key={col.id}>{col.label}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map((row, idx) => (
            <Tr key={idx}>
              <Td>{row.week}</Td>
              <Td>{row.group}</Td>
              <Td>{row.count}</Td>
              <Td>
                {row.absoluteStrength[0].toFixed(2)}
                {unit}/{toPercent(row.absoluteStrength[1])}
              </Td>
              <Td>{toPercent(row.relativeStrength)}</Td>
              <Td>
                {row.trainingLoad[0].toFixed(2)}
                {unit}/{toPercent(row.trainingLoad[1])}
              </Td>
              <Td>
                {row.capacity.toFixed(2)}
                {unit}
              </Td>
              <Td>
                {row.lightTraining.toFixed(2)}
                {unit}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
