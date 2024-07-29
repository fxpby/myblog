import React, {useState, useEffect} from 'react';
import {
  Button,
  Box,
  Flex,
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
import s from './styles.module.css';

export default function ConfigArea(props) {
  const {oneRM, setOneRM, cycle, setCycle, renderTableData} = props;

  const [rules, setRules] = useState({
    oneRM: {
      value: 0,
      rule: (val) => {
        return typeof val === 'number' && !isNaN(val);
      },
    },
  });

  const verifyRuleHandler = (key) => {
    const func = rules[key]?.rule;
    const value = rules[key]?.value;
    console.log('value: ', value);
    return func(value);
  };

  useEffect(() => {
    renderTableData();
  }, []);

  useEffect(() => {
    renderTableData();
  }, [cycle, oneRM]);

  const handler = () => {
    const input = rules?.oneRM?.value;

    if (verifyRuleHandler('oneRM')) {
      setOneRM(input);
    }
  };

  return (
    <Flex direction="column" className="p-10 gap-8">
      <RadioGroup onChange={setCycle} value={cycle}>
        请选择中周期阶段：
        <Stack direction="row">
          <Radio value="mxs-1">mxs-1</Radio>
          <Radio value="mxs-2">mxs-2</Radio>
        </Stack>
      </RadioGroup>
      <FormControl>
        <FormLabel>请输入目标动作 1RM 的重量</FormLabel>
        <NumberInput
          defaultValue={0}
          value={rules.oneRM.value}
          min={0}
          max={500}
          onChange={(valueAsString, valueAsNumber) =>
            setRules((prev) => {
              return {
                ...prev,
                oneRM: {
                  ...prev.oneRM,
                  value: valueAsNumber,
                },
              };
            })
          }>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <Button colorScheme="green" onClick={handler}>
        Go!
      </Button>
      {/* <FormControl isInvalid={!verifyRuleHandler('oneRM')}>
        <FormLabel>Week1 组数/次数</FormLabel>
      </FormControl> */}
    </Flex>
  );
}
