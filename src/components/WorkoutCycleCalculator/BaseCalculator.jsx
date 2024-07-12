import React, {memo} from 'react';
import s from './styles.module.css';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';

const rawList = ['W-1', 'W-2', 'W-3', 'W-4(减载)', 'W-4(减载)'];

const columns = [
  {
    label: '/',
    id: 'name',
    items: rawList,
  },
  {
    label: '适应次数',
    id: 'rep',
    items: [],
  },
  {
    label: '目标负荷',
    id: 'targetLoad',
    items: [],
  },
  {
    label: '次',
    id: 'count',
    items: [],
  },
  {
    label: '组',
    id: 'group',
    items: [3, 4, 5, 4, 6],
  },
];

const targetLoadRatioList = {
  normalPrepare: {
    12: [0.9, 0.925, 0.95, 0.85, 0.45],
    10: [0.975, 1, 1.025, 0.925, 0.525],
  },
};

const BaseCalculator = memo(({rep, oneRM, cycleName} = {}) => {
  console.log('BaseCalculator');
  const tempColumns = [...columns];
  const repFitMap = {
    10: 0.75 * oneRM,
    12: 0.67 * oneRM,
  };
  tempColumns.forEach((col) => {
    if (col.id === 'rep') {
      col.items = new Array(5).fill(`${rep}RM ${repFitMap[rep].toFixed(2)}kg`);
    }
    if (col.id === 'targetLoad') {
      col.items = targetLoadRatioList[cycleName][rep].map(
        (ratio) =>
          `${(repFitMap[rep] * ratio).toFixed(2)}kg (${(ratio * 100).toFixed(
            2,
          )}%)`,
      );
    }
    if (col.id === 'count') {
      col.items = new Array(5).fill(rep);
    }
  });

  const displayTableData = rawList.map((raw, index) => {
    const targetColItem = (id) =>
      tempColumns.find((x) => x.id === id).items[index];
    return {
      name: targetColItem('name'),
      rep: targetColItem('rep'),
      targetLoad: targetColItem('targetLoad'),
      count: targetColItem('count'),
      group: targetColItem('group'),
    };
  });

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            {tempColumns.map((col) => (
              <Th>{col.label}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {displayTableData.map((row) => (
            <Tr>
              <Td>{row.name}</Td>
              <Td>{row.rep}</Td>
              <Td>{row.targetLoad}</Td>
              <Td>{row.count}</Td>
              <Td>{row.group}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
});

export default BaseCalculator;
