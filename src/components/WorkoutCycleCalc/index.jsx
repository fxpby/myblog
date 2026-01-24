import React from 'react';
import ConfigArea from './ConfigArea';
import TableArea from './TableArea';
import useConfigInitData from './useConfigInitData';
import {ChakraProvider} from '@chakra-ui/react';

const styles = {
  workoutCycleCalculatorWrapper: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '20px',
  },
};

export default function Calculator() {
  const props = useConfigInitData();
  return (
    <ChakraProvider resetCSS={false} disableGlobalStyle={true}>
      <div style={styles.workoutCycleCalculatorWrapper}>
        <ConfigArea {...props} />
        <TableArea {...props} />
      </div>
    </ChakraProvider>
  );
}
