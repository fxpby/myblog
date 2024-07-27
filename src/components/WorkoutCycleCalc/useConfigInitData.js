import {useState} from 'react';
import {
  cycleConfig,
  bufferMap,
  lightTrainingDegreeMap,
  overloadIncreaseDegreeMap,
  RMCountRelation,
  tableColumn,
  deloadWeekIndex,
  deloadDegreeMap,
} from './constant';

const useConfigInitData = () => {
  const [oneRM, setOneRM] = useState(0);
  const [cycle, setCycle] = useState('mxs-1');
  const [tableDataList, setTableDataList] = useState(null);

  const renderTableData = () => {
    const {group, count} = cycleConfig[cycle];
    const buffer = bufferMap[cycle];
    const lightTrainingDegree = lightTrainingDegreeMap[cycle];
    const overloadIncreaseDegree = overloadIncreaseDegreeMap[cycle];
    const deloadDegree = deloadDegreeMap[cycle];
    // TODO 取值方式待优化
    const rowLength1 = group[0].length;
    const getTableData = ({
      rowLength,
      baseRelativeStrength,
      group,
      count,
    } = {}) => {
      const initTable = new Array(rowLength).fill();
      let previousRowTable1 = {};
      return initTable.map((row, rowIdx) => {
        const result = {};
        tableColumn.forEach((col) => {
          const isDeloadWeek = deloadWeekIndex?.includes(rowIdx);
          const currentDeloadWeekIdx = deloadWeekIndex.findIndex(
            (x) => x === rowIdx,
          );
          if (col.id === 'week') {
            const deloadStart = deloadWeekIndex[0];

            if (isDeloadWeek) {
              result[col.id] = `W-${deloadStart + 1}.${
                currentDeloadWeekIdx + 1
              }`;
            } else {
              result[col.id] = `W-${rowIdx + 1}`;
            }
          }
          const _group = group[rowIdx];
          if (col.id === 'group') {
            result[col.id] = _group;
          }
          const _count = count[rowIdx];
          if (col.id === 'count') {
            result[col.id] = _count;
          }
          const absoluteStrengthWeight = RMCountRelation[count[rowIdx]] * oneRM;
          const absoluteStrengthPercent = RMCountRelation[count[rowIdx]];
          if (col.id === 'absoluteStrength') {
            result[col.id] = [absoluteStrengthWeight, absoluteStrengthPercent];
          }

          const beforeRelativeStrength =
            rowIdx === 0
              ? baseRelativeStrength
              : previousRowTable1?.relativeStrength;
          let relativeStrength;
          if (isDeloadWeek) {
            relativeStrength =
              beforeRelativeStrength + deloadDegree[currentDeloadWeekIdx];
          } else {
            relativeStrength =
              rowIdx === 0
                ? baseRelativeStrength
                : beforeRelativeStrength + overloadIncreaseDegree;
          }
          if (col.id === 'relativeStrength') {
            result[col.id] = relativeStrength;
          }
          const trainingLoadWeight = absoluteStrengthWeight * relativeStrength;
          const trainingLoadPercent =
            absoluteStrengthPercent * relativeStrength;
          if (col.id === 'trainingLoad') {
            result[col.id] = [trainingLoadWeight, trainingLoadPercent];
          }
          if (col.id === 'capacity') {
            result[col.id] = _group * _count * trainingLoadWeight;
          }
          if (col.id === 'lightTraining') {
            result[col.id] = lightTrainingDegree * trainingLoadWeight;
          }
        });
        previousRowTable1 = result;
        return result;
      });
    };
    const baseRelativeStrength1 = 1 - buffer;

    const table1 = getTableData({
      rowLength: rowLength1,
      baseRelativeStrength: baseRelativeStrength1,
      group: group[0],
      count: count[0],
    });

    const baseRelativeStrength2 =
      table1[deloadWeekIndex[0] - 1]?.relativeStrength + overloadIncreaseDegree;
    const rowLength2 = group[1].length;

    const table2 = getTableData({
      rowLength: rowLength2,
      baseRelativeStrength: baseRelativeStrength2,
      group: group[1],
      count: count[1],
    });

    setTableDataList([table1, table2]);
  };

  return {
    oneRM,
    setOneRM,
    cycle,
    setCycle,
    renderTableData,
    tableDataList,
    tableColumn,
    setTableDataList,
  };
};

export default useConfigInitData;
