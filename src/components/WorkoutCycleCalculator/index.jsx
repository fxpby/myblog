import React, {memo} from 'react';
import CycleCard from './CycleCard';
import s from './styles.module.css';
import {ChakraProvider} from '@chakra-ui/react';

const WorkoutCycleCalculator = (props) => {
  const {cycleName, title} = props;

  return (
    <ChakraProvider resetCSS={false} disableGlobalStyle={true}>
      <div className={s.workoutCycleCalculatorWrapper}>
        <CycleCard cycleName={cycleName} title={title} />
      </div>
    </ChakraProvider>
  );
};

export default memo(WorkoutCycleCalculator);
