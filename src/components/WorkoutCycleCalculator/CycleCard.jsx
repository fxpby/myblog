import React, {useState, memo} from 'react';
import BaseCalculator from './BaseCalculator';

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Tag,
} from '@chakra-ui/react';
import s from './styles.module.css';

const CycleCard = memo(({cycleName, title} = {}) => {
  const [oneRM, setOneRM] = useState(0);

  return (
    <div className={s.cycleCardWrapper}>
      <Tag size="lg">{title}</Tag>
      <div>
        请输入 1RM 的重量(kg)
        <NumberInput
          defaultValue={0}
          value={oneRM}
          min={0}
          max={500}
          onChange={(valueAsString, valueAsNumber) => setOneRM(valueAsNumber)}>
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
});

export default CycleCard;
