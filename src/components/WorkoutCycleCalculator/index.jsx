import React, {useState} from 'react';
import s from './styles.module.css';
import {
  ChakraProvider,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Tag,
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

const WorkoutCycleCalculator = (props) => {
  const {cycleName, title} = props;
  const [oneRMNormalPrepare, setOneRMNormalPrepare] = useState(0);
  const [oneRMB, setOneRMB] = useState(0);
  const [oneRMD, setOneRMD] = useState(0);

  const BaseCalculator = ({rep, oneRM, cycleName} = {}) => {
    const tempColumns = [...columns];
    const repFitMap = {
      10: 0.75 * oneRM,
      12: 0.67 * oneRM,
    };
    tempColumns.forEach((col) => {
      if (col.id === 'rep') {
        col.items = new Array(5).fill(
          `${rep}RM ${repFitMap[rep].toFixed(2)}kg`,
        );
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
  };

  const handleChange = (callback, val) => {
    callback(val);
  };

  const CycleCard = ({inputChange, oneRM, cycleName} = {}) => (
    <div className={s.cycleCardWrapper}>
      <Tag size="lg">{title}</Tag>
      <div>
        请输入 1RM 的重量(kg)
        <NumberInput
          defaultValue={0}
          value={oneRM}
          min={0}
          max={500}
          onChange={(valueAsString, valueAsNumber) =>
            handleChange(inputChange, valueAsNumber)
          }>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </div>
      <div>
        <div>12 RM 小周期 ① (W 代表周)</div>
        <BaseCalculator rep={12} oneRM={oneRM} cycleName={cycleName} />
      </div>
      <div>
        <div>10 RM 小周期 ② (W 代表周)</div>
        <BaseCalculator rep={10} oneRM={oneRM} cycleName={cycleName} />
      </div>
    </div>
  );

  return (
    <ChakraProvider resetCSS={false} disableGlobalStyle={true}>
      <div className={s.workoutCycleCalculatorWrapper}>
        <CycleCard
          inputChange={setOneRMNormalPrepare}
          oneRM={oneRMNormalPrepare}
          cycleName={cycleName}
        />
      </div>
    </ChakraProvider>
  );
};

export default WorkoutCycleCalculator;
