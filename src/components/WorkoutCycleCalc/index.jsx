import React from 'react';
import ConfigArea from './ConfigArea';
import TableArea from './TableArea';
import useConfigInitData from './useConfigInitData';
import {ChakraProvider} from '@chakra-ui/react';
import s from './styles.module.css';

export default function Calculator() {
  const props = useConfigInitData();
  return (
    <ChakraProvider resetCSS={false} disableGlobalStyle={true}>
      <div className={`${s.workoutCycleCalculatorWrapper} unocss`}>
        <ConfigArea {...props} />
        <TableArea {...props} />
      </div>
    </ChakraProvider>
  );
}
