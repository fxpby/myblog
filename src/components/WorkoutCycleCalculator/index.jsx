import React, {useState} from 'react';
import s from './styles.module.css';

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
  const [oneRMS, setOneRMS] = useState('');
  const [oneRMB, setOneRMB] = useState('');
  const [oneRMD, setOneRMD] = useState('');

  const baseCalculator = ({rep, oneRM} = {}) => {
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
        col.item = targetLoadRatioList[rep].map(
          (ratio) => `${Number(oneRM) * ratio} (${ratio * 100}%)`,
        );
      }
      if (col.id === 'count') {
        col.items = new Array(5).fill(rep);
      }
    });
    return (
      <div className={s.columnsWrap}>
        {tempColumns.map((col) => (
          <div className={s.columnsItem}>
            <div className={s.tableHeader}>{col.label}</div>
            <div className={s.tableContent}>
              {col.items.map((item) => (
                <div className={s.contentItem}>{item}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
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

  return (
    <div className={s.workoutCycleCalculatorWrapper}>
      <H2>S</H2>
      <div>
        请输入 1RM 的重量(kg)
        <input
          type="text"
          value={oneRMS}
          onChange={(e) => handleInputChange(e, 'S')}
        />
      </div>
      <div>
        <div>12 RM 小周期 ①</div>
        <BaseCalculator rep={12} oneRM={oneRMS} />
      </div>
      <div>
        <div>10 RM 小周期 ②</div>
        <BaseCalculator rep={10} oneRM={oneRMS} />
      </div>
      <br />
      <H2>B</H2>
      <div>
        请输入 1RM 的重量(kg)
        <input
          type="text"
          value={oneRMB}
          onChange={(e) => handleInputChange(e, 'B')}
        />
      </div>
      <div>
        <div>12 RM 小周期 ①</div>
        <BaseCalculator rep={12} oneRM={oneRMB} />
      </div>
      <div>
        <div>10 RM 小周期 ②</div>
        <BaseCalculator rep={10} oneRM={oneRMB} />
      </div>
      <br />
      <H2>D</H2>
      <div>
        请输入 1RM 的重量(kg)
        <input
          type="text"
          value={oneRMD}
          onChange={(e) => handleInputChange(e, 'D')}
        />
      </div>
      <div>
        <div>12 RM 小周期 ①</div>
        <BaseCalculator rep={12} oneRM={oneRMD} />
      </div>
      <div>
        <div>10 RM 小周期 ②</div>
        <BaseCalculator rep={10} oneRM={oneRMD} />
      </div>
    </div>
  );
};

export default WorkoutCycleCalculator;
