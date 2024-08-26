import {useState} from 'react';
import {RMCountRelation, tableColumn, defaultRule} from './constant';

const useConfigInitData = () => {
  const [oneRM, setOneRM] = useState(defaultRule.oneRM);
  const [cycle, setCycle] = useState('mxs-1');

  const [unit, setUnit] = useState(defaultRule.unit);
  // 循环次数
  const [cycleCount, setCycleCount] = useState(defaultRule.cycleCount);
  const [progressiveOverloadWeekCount, setProgressiveOverloadWeekCount] =
    useState(defaultRule.progressiveOverloadWeekCount);
  const [deloadWeekCount, setDeloadWeekCount] = useState(
    defaultRule.deloadWeekCount,
  );
  // 减载是否分段
  const [isdeloadWeekBreak, setIsdeloadWeekBreak] = useState(
    defaultRule.isdeloadWeekBreak,
  );
  const [group, setGroup] = useState(defaultRule.group);
  const [count, setCount] = useState(defaultRule.count);
  const [buffer, setBuffer] = useState(0.15);
  const [lightTrainingDegree, setLightTrainingDegree] = useState(
    defaultRule.lightTrainingDegree,
  );
  const [overloadIncreaseDegree, setOverloadIncreaseDegree] = useState(
    defaultRule.overloadIncreaseDegree,
  );
  const [deloadDegree, setDeloadDegree] = useState(defaultRule.deloadDegree);
  const [cycleConnection, setCycleConnection] = useState(
    defaultRule.cycleConnection,
  );

  const [tableDataList, setTableDataList] = useState(null);

  const deloadWeekIndex = () => {
    const overLoadCount = progressiveOverloadWeekCount;
    return new Array(deloadWeekCount).fill()?.map((x, i) => overLoadCount + i);
  };

  const renderTableData = () => {
    const getTableData = ({
      rowLength,
      // baseRelativeStrength,
      group,
      count,
      tIdx,
    } = {}) => {
      const initTable = new Array(rowLength).fill();
      let previousRowTable = {};
      const baseRelativeStrengthFirst = 1 - buffer;

      const baseRelativeStrengthOther =
        prevTable[deloadWeekIndex()[0] - 1]?.relativeStrength +
        cycleConnection[tIdx - 1];
      let baseRelativeStrength =
        tIdx === 0 ? baseRelativeStrengthFirst : baseRelativeStrengthOther;

      return initTable.map((row, rowIdx) => {
        const result = {};
        tableColumn.forEach((col) => {
          const isDeloadWeek = deloadWeekIndex()?.includes(rowIdx);
          const currentDeloadWeekIdx = deloadWeekIndex().findIndex(
            (x) => x === rowIdx,
          );
          if (col.id === 'week') {
            const deloadStart = deloadWeekIndex()[0];

            if (isdeloadWeekBreak && isDeloadWeek) {
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
              : previousRowTable?.relativeStrength;
          let relativeStrength;

          if (isDeloadWeek) {
            relativeStrength =
              beforeRelativeStrength + deloadDegree[tIdx][currentDeloadWeekIdx];
          } else {
            relativeStrength =
              rowIdx === 0
                ? baseRelativeStrength
                : beforeRelativeStrength + overloadIncreaseDegree[tIdx][rowIdx];
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
            result[col.id] = lightTrainingDegree[tIdx] * trainingLoadWeight;
          }
        });
        previousRowTable = result;
        return result;
      });
    };

    let prevTable = [];

    const totalTableList = new Array(cycleCount).fill().map((table, tIdx) => {
      const result = getTableData({
        rowLength: group[tIdx].length,
        tIdx,
        group: group[tIdx],
        count: count[tIdx],
      });
      prevTable = result;
      return result;
    });

    setTableDataList(totalTableList);
    console.log('totalTableList: ', totalTableList);
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
    unit,
    setUnit,
    cycleCount,
    setCycleCount,
    progressiveOverloadWeekCount,
    setProgressiveOverloadWeekCount,
    deloadWeekCount,
    setDeloadWeekCount,
    group,
    setGroup,
    count,
    setCount,
    buffer,
    setBuffer,
    lightTrainingDegree,
    setLightTrainingDegree,
    overloadIncreaseDegree,
    setOverloadIncreaseDegree,
    deloadDegree,
    setDeloadDegree,
    isdeloadWeekBreak,
    setIsdeloadWeekBreak,
    cycleConnection,
    setCycleConnection,
  };
};

export default useConfigInitData;
