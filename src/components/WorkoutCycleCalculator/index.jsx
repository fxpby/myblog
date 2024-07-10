import React, {useState} from 'react';
import s from './styles.module.css';
import {
  ChakraProvider,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

const rawList = ['W-1', 'W-2', 'W-3', 'W-4', 'W-5'];

const WorkoutCycleCalculator = () => {
  return (
    <ChakraProvider>
      <div className={s.workoutCycleCalculatorWrapper}>
        <h2>S</h2>
        <div>
          请输入 1RM 的重量(kg)
          <input
            type="text"
            value={oneRMS}
            onChange={(e) => handleInputChange(e, 'S')}
          />
          <NumberInput
            defaultValue={0}
            min={0}
            max={500}
            onChange={(val) => setOneRMS(val)}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
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
        <h2>B</h2>
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
        <h2>D</h2>
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
    </ChakraProvider>
  );
};
