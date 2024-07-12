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

const CycleCard = memo(({cycleName, title, cycles = []} = {}) => {
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
      {cycles.map((item) => (
        <div>
          <BaseCalculator
            rep={item.rep}
            oneRM={oneRM}
            cycleName={cycleName}
            caption={item.caption}
          />
        </div>
      ))}
    </div>
  );
});

export default CycleCard;
