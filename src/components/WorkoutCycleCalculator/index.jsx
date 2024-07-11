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
const rawList = ['W-1', 'W-2', 'W-3', 'W-4', 'W-5'];

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
    items: [4, 5, 5, 4, 6],
  },
];

const targetLoadRatioList = {
  12: [0.9, 0.925, 0.95, 0.85, 0.45],
  10: [0.975, 1, 1.025, 0.925, 0.525],
};

const WorkoutCycleCalculator = () => {
  const [oneRMS, setOneRMS] = useState(0);
  const [oneRMB, setOneRMB] = useState(0);
  const [oneRMD, setOneRMD] = useState(0);

  const BaseCalculator = ({rep, oneRM} = {}) => {
    const tempColumns = [...columns];
    const repFitMap = {
      10: 0.75 * Number(oneRM),
      12: 0.67 * Number(oneRM),
    };
    tempColumns.forEach((col) => {
      if (col.id === 'rep') {
        col.items = new Array(5).fill(`${rep}RM ${repFitMap[rep]}`);
      }
      if (col.id === 'targetLoad') {
        col.items = targetLoadRatioList[rep].map(
          (ratio) =>
            `${(Number(repFitMap[rep]) * ratio).toFixed(2)} (${ratio * 100}%)`,
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
    console.log(
      '%c Line:83 🥥 displayTableData',
      'color:#4fff4B',
      displayTableData,
    );

    // return (
    //   <div className={s.columnsWrap}>
    //     {tempColumns.map((col) => (
    //       <div className={s.columnsItem}>
    //         <div className={s.tableHeader}>{col.label}</div>
    //         <div className={s.tableContent}>
    //           {col.items.map((item) => (
    //             <div className={s.contentItem}>{item}</div>
    //           ))}
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // );
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

  const handleInputChange = (e, type) => {
    console.log('%c Line:12 🍕 e', 'color:#3f7cff', e);
    if (type === 'S') {
      setOneRMS(e?.target?.value);
    } else if (type === 'B') {
      setOneRMB(e?.target?.value);
    } else if (type === 'D') {
      setOneRMD(e?.target?.value);
    }
  };

  const CycleCard = ({inputChange, oneRM, title} = {}) => (
    <div className={s.cycleCardWrapper}>
      <Tag>{title}</Tag>
      <div>
        请输入 1RM 的重量(kg)
        <NumberInput
          defaultValue={0}
          min={0}
          max={500}
          onChange={(val) => inputChange(val)}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </div>
      <div>
        <div>12 RM 小周期 ①</div>
        <BaseCalculator rep={12} oneRM={oneRM} />
      </div>
      <div>
        <div>10 RM 小周期 ②</div>
        <BaseCalculator rep={10} oneRM={oneRM} />
      </div>
    </div>
  );

  return (
    <ChakraProvider>
      <div className={s.workoutCycleCalculatorWrapper}>
        <CycleCard
          inputChange={(val) => setOneRMS(val)}
          oneRM={oneRMS}
          title={'S'}
        />
        <CycleCard
          inputChange={(val) => setOneRMB(val)}
          oneRM={oneRMB}
          title={'B'}
        />
        <CycleCard
          inputChange={(val) => setOneRMD(val)}
          oneRM={oneRMD}
          title={'D'}
        />
      </div>
    </ChakraProvider>
  );
};

export default WorkoutCycleCalculator;
