import React, {useState, useEffect, useCallback} from 'react';
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
  HStack,
  VStack,
} from '@chakra-ui/react';
import {defaultRule} from './constant';

export default function ConfigArea(props) {
  const {
    oneRM,
    setOneRM,
    cycle,
    setCycle,
    renderTableData,
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
  } = props;

  const [rules, setRules] = useState({
    oneRM: {
      value: 0,
      rule: (val) => {
        return typeof val === 'number' && !isNaN(val);
      },
      setter: setOneRM,
    },
    unit: {
      value: 'kg',
      rule: (val) => {
        return true;
      },
      setter: setUnit,
    },
    cycleCount: {
      value: 2,
      rule: (val) => {
        return typeof val === 'number' && !isNaN(val);
      },
      setter: setCycleCount,
    },
    progressiveOverloadWeekCount: {
      value: 0,
      rule: (val) => {
        return typeof val === 'number' && !isNaN(val);
      },
      setter: setProgressiveOverloadWeekCount,
    },
    deloadWeekCount: {
      value: 0,
      rule: (val) => {
        return typeof val === 'number' && !isNaN(val);
      },
      setter: setDeloadWeekCount,
    },
    isdeloadWeekBreak: {
      value: false,
      rule: (val) => {
        return true;
      },
      setter: setIsdeloadWeekBreak,
    },
    group: {
      value: [],
      rule: (val) => {
        return true;
      },
      setter: setGroup,
    },
    count: {
      value: [],
      rule: (val) => {
        return true;
      },
      setter: setCount,
    },
    buffer: {
      value: 0,
      rule: (val) => {
        return true;
      },
      setter: setBuffer,
    },
    lightTrainingDegree: {
      value: 0,
      rule: (val) => {
        return true;
      },
      setter: setLightTrainingDegree,
    },
    overloadIncreaseDegree: {
      value: [],
      rule: (val) => {
        return true;
      },
      setter: setOverloadIncreaseDegree,
    },
    deloadDegree: {
      value: [],
      rule: (val) => {
        return true;
      },
      setter: setDeloadDegree,
    },
    cycleConnection: {
      value: [],
      rule: (val) => {
        return true;
      },
      setter: setCycleConnection,
    },
  });

  const verifyRuleHandler = (key) => {
    const func = rules[key]?.rule;
    const value = rules[key]?.value;
    console.log('value: ', value);
    return func(value);
  };

  const initConfigData = () => {
    setRules((prev) => {
      return {
        ...prev,
        oneRM: {
          ...prev.oneRM,
          value: defaultRule.oneRM,
        },
        unit: {
          ...prev.unit,
          value: defaultRule.unit,
        },
        cycleCount: {
          ...prev.cycleCount,
          value: defaultRule.cycleCount,
        },
        progressiveOverloadWeekCount: {
          ...prev.progressiveOverloadWeekCount,
          value: defaultRule.progressiveOverloadWeekCount,
        },
        deloadWeekCount: {
          ...prev.deloadWeekCount,
          value: defaultRule.deloadWeekCount,
        },
        isdeloadWeekBreak: {
          ...prev.isdeloadWeekBreak,
          value: defaultRule.isdeloadWeekBreak,
        },
        group: {
          ...prev.group,
          value: defaultRule.group,
        },
        count: {
          ...prev.count,
          value: defaultRule.count,
        },
        buffer: {
          ...prev.buffer,
          value: defaultRule.buffer,
        },
        lightTrainingDegree: {
          ...prev.lightTrainingDegree,
          value: defaultRule.lightTrainingDegree,
        },
        overloadIncreaseDegree: {
          ...prev.overloadIncreaseDegree,
          value: defaultRule.overloadIncreaseDegree,
        },
        deloadDegree: {
          ...prev.deloadDegree,
          value: defaultRule.deloadDegree,
        },
        cycleConnection: {
          ...prev.cycleConnection,
          value: defaultRule.cycleConnection,
        },
      };
    });
  };

  const initialize = () => {
    initConfigData();
    renderTableData();
  };

  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    renderTableData();
  }, [
    oneRM,
    unit,
    group,
    count,
    isdeloadWeekBreak,
    cycleConnection,
    deloadDegree,
    overloadIncreaseDegree,
    lightTrainingDegree,
    buffer,
    deloadWeekCount,
    progressiveOverloadWeekCount,
    cycleCount,
  ]);

  const handler = () => {
    console.log('rules: ', rules);
    Object.keys(rules).forEach((configName) => {
      if (verifyRuleHandler(configName)) {
        rules[configName]?.setter(rules[configName]?.value);
      }
    });
    // setOneRM(rules.oneRM.value)
  };

  const deloadWeekIndex = useCallback(() => {
    const overLoadCount = rules.progressiveOverloadWeekCount.value;
    return new Array(rules.deloadWeekCount.value)
      .fill()
      ?.map((x, i) => overLoadCount + i);
  }, [rules.progressiveOverloadWeekCount.value, rules.deloadWeekCount.value]);

  const getWeekLabel = (index) => {
    const isDeloadWeek = deloadWeekIndex()?.includes(index);
    const currentDeloadWeekIdx = deloadWeekIndex().findIndex(
      (x) => x === index,
    );
    const deloadStart = deloadWeekIndex()[0];

    if (rules.isdeloadWeekBreak.value) {
      return isDeloadWeek
        ? `W-${deloadStart + 1}.${currentDeloadWeekIdx + 1}`
        : `W-${index + 1}`;
    } else {
      return `W-${index + 1}`;
    }
  };

  return (
    <VStack spacing="24px" align="normal">
      <Box p="24px" display="flex" flexDirection="column" gap="20px">
        <HStack spacing="20px" justifyContent="space-between">
          {/* <RadioGroup onChange={setCycle} value={cycle}>
          请选择中周期阶段：
          <Stack direction="row">
            <Radio value="mxs-1">mxs-1</Radio>
            <Radio value="mxs-2">mxs-2</Radio>
          </Stack>
        </RadioGroup> */}
          <RadioGroup
            onChange={(val) =>
              setRules((prev) => {
                return {
                  ...prev,
                  unit: {
                    ...prev.unit,
                    value: val,
                  },
                };
              })
            }
            value={rules.unit.value}>
            请选择重量单位：
            <Stack direction="row">
              <Radio value="kg">kg</Radio>
              <Radio value="lb">lb</Radio>
            </Stack>
          </RadioGroup>
          <Button onClick={() => initialize()}>恢复默认数据</Button>
        </HStack>
        <HStack spacing="20px">
          <Box w="20%">
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
          </Box>
          <Box w="20%">
            <FormControl>
              <FormLabel>请输入中周期循环次数</FormLabel>
              <NumberInput
                defaultValue={1}
                value={rules.cycleCount.value}
                min={1}
                max={10}
                onChange={(valueAsString, valueAsNumber) =>
                  setRules((prev) => {
                    const newGroupValue = prev.group.value.slice(); // 创建一个副本以避免直接修改原数组
                    const newCountValue = prev.count.value.slice(); // 创建一个副本以避免直接修改原数组
                    const newLightTrainingDegree =
                      prev.lightTrainingDegree.value.slice(); // 创建一个副本以避免直接修改原数组
                    const newCycleConnection =
                      prev.cycleConnection.value.slice(); // 创建一个副本以避免直接修改原数组
                    const newOverloadIncreaseDegree =
                      prev.overloadIncreaseDegree.value.slice(); // 创建一个副本以避免直接修改原数组

                    const newDeloadDegree = prev.deloadDegree.value.slice(); // 创建一个副本以避免直接修改原数组

                    const diff = valueAsNumber - rules.cycleCount.value;

                    if (diff > 0) {
                      for (let i = 0; i < diff; i++) {
                        newGroupValue.push(
                          new Array(
                            rules.progressiveOverloadWeekCount.value +
                              rules.deloadWeekCount.value,
                          ).fill(3),
                        );
                        newCountValue.push(
                          new Array(
                            rules.progressiveOverloadWeekCount.value +
                              rules.deloadWeekCount.value,
                          ).fill(3),
                        );
                        newLightTrainingDegree.push(0.7);
                        newCycleConnection.push(0.2);
                        newOverloadIncreaseDegree.push(
                          new Array(
                            rules.progressiveOverloadWeekCount.value,
                          ).fill(0.02),
                        );
                        newDeloadDegree.push(
                          new Array(rules.deloadWeekCount.value).fill(0.02),
                        );
                      }
                    } else if (diff < 0) {
                      newGroupValue.splice(valueAsNumber); // 截断数组至新长度
                      newCountValue.splice(valueAsNumber); // 截断数组至新长度
                      newLightTrainingDegree.splice(valueAsNumber);
                      newCycleConnection.splice(valueAsNumber);
                      newOverloadIncreaseDegree.splice(valueAsNumber);
                      newDeloadDegree.splice(valueAsNumber);
                    }
                    return {
                      ...prev,
                      cycleCount: {
                        ...prev.cycleCount,
                        value: valueAsNumber,
                      },
                      group: {
                        ...prev.group,
                        value: newGroupValue,
                      },
                      count: {
                        ...prev.count,
                        value: newCountValue,
                      },
                      lightTrainingDegree: {
                        ...prev.lightTrainingDegree,
                        value: newLightTrainingDegree,
                      },
                      cycleConnection: {
                        ...prev.cycleConnection,
                        value: newCycleConnection,
                      },
                      overloadIncreaseDegree: {
                        ...prev.overloadIncreaseDegree,
                        value: newOverloadIncreaseDegree,
                      },
                      deloadDegree: {
                        ...prev.deloadDegree,
                        value: newDeloadDegree,
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
          </Box>
          <Box w="20%">
            <FormControl>
              <FormLabel>请输入中周期渐进超负荷周数</FormLabel>
              <NumberInput
                defaultValue={0}
                value={rules.progressiveOverloadWeekCount.value}
                min={1}
                max={500}
                onChange={(valueAsString, valueAsNumber) =>
                  setRules((prev) => {
                    let newGroupValue = prev.group.value.slice(); // 创建一个副本以避免直接修改原数组
                    let newCountValue = prev.count.value.slice(); // 创建一个副本以避免直接修改原数组
                    let newOverloadIncreaseDegree =
                      prev.overloadIncreaseDegree.value.slice(); // 创建一个副本以避免直接修改原数组

                    const diff =
                      valueAsNumber - rules.progressiveOverloadWeekCount.value;

                    if (diff > 0) {
                      for (let i = 0; i < diff; i += 1) {
                        const _g = newGroupValue[i];
                        const _c = newCountValue[i];

                        const prev_g = _g.slice(
                          0,
                          rules.progressiveOverloadWeekCount.value,
                        );
                        const behind_g = _g.slice(
                          rules.progressiveOverloadWeekCount.value,
                          _g.length,
                        );
                        const prev_c = _c.slice(
                          0,
                          rules.progressiveOverloadWeekCount.value,
                        );
                        const behind_c = _c.slice(
                          rules.progressiveOverloadWeekCount.value,
                          _c.length,
                        );

                        newGroupValue = newGroupValue.map(() => {
                          return [...prev_g, 1, ...behind_g];
                        });
                        newCountValue = newCountValue.map(() => {
                          return [...prev_c, 1, ...behind_c];
                        });
                      }
                      newOverloadIncreaseDegree.forEach((item) => {
                        item.push(0.02);
                        return item;
                      });
                    } else if (diff < 0) {
                      for (let i = 0; i < Math.abs(diff); i += 1) {
                        const _g = newGroupValue[i];
                        const _c = newCountValue[i];
                        const prev_g = _g.slice(
                          0,
                          rules.progressiveOverloadWeekCount.value + diff,
                        );
                        const behind_g = _g.slice(
                          rules.progressiveOverloadWeekCount.value,
                          _g.length,
                        );
                        const prev_c = _c.slice(
                          0,
                          rules.progressiveOverloadWeekCount.value + diff,
                        );
                        const behind_c = _c.slice(
                          rules.progressiveOverloadWeekCount.value,
                          _c.length,
                        );
                        newGroupValue = newGroupValue.map(() => {
                          return [...prev_g, ...behind_g];
                        });
                        newCountValue = newCountValue.map(() => {
                          return [...prev_c, ...behind_c];
                        });
                      }

                      newOverloadIncreaseDegree.forEach((item) => {
                        item.splice(valueAsNumber);
                      });
                    }

                    return {
                      ...prev,
                      progressiveOverloadWeekCount: {
                        ...prev.progressiveOverloadWeekCount,
                        value: valueAsNumber,
                      },
                      group: {
                        ...prev.group,
                        value: newGroupValue,
                      },
                      count: {
                        ...prev.count,
                        value: newCountValue,
                      },
                      overloadIncreaseDegree: {
                        ...prev.overloadIncreaseDegree,
                        value: newOverloadIncreaseDegree,
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
          </Box>

          <Box w="20%">
            <FormControl>
              <FormLabel>请输入中周期减载周数</FormLabel>
              <NumberInput
                defaultValue={0}
                value={rules.deloadWeekCount.value}
                min={1}
                max={500}
                onChange={(valueAsString, valueAsNumber) =>
                  setRules((prev) => {
                    let newGroupValue = prev.group.value.slice(); // 创建一个副本以避免直接修改原数组
                    let newCountValue = prev.count.value.slice(); // 创建一个副本以避免直接修改原数组
                    let newDeloadDegree = prev.deloadDegree.value.slice();
                    const diff = valueAsNumber - rules.deloadWeekCount.value;

                    if (diff > 0) {
                      for (let i = 0; i < diff; i += 1) {
                        const _g = newGroupValue[i];
                        const _c = newCountValue[i];

                        const prev_g = _g.slice(
                          0,
                          rules.progressiveOverloadWeekCount.value,
                        );
                        const behind_g = _g.slice(
                          rules.progressiveOverloadWeekCount.value,
                          _g.length,
                        );
                        const prev_c = _c.slice(
                          0,
                          rules.progressiveOverloadWeekCount.value,
                        );
                        const behind_c = _c.slice(
                          rules.progressiveOverloadWeekCount.value,
                          _c.length,
                        );

                        newGroupValue = newGroupValue.map(() => {
                          return [...prev_g, ...behind_g, 1];
                        });
                        newCountValue = newCountValue.map(() => {
                          return [...prev_c, ...behind_c, 1];
                        });
                      }
                      newDeloadDegree.forEach((item) => {
                        item.push(0.1);
                        return item;
                      });
                    } else if (diff < 0) {
                      for (let i = 0; i < Math.abs(diff); i += 1) {
                        const _g = newGroupValue[i];
                        const _c = newCountValue[i];
                        const prev_g = _g.slice(
                          0,
                          rules.progressiveOverloadWeekCount.value,
                        );
                        const behind_g = _g.slice(
                          rules.progressiveOverloadWeekCount.value,
                          _g.length + diff,
                        );
                        const prev_c = _c.slice(
                          0,
                          rules.progressiveOverloadWeekCount.value,
                        );
                        const behind_c = _c.slice(
                          rules.progressiveOverloadWeekCount.value,
                          _c.length + diff,
                        );
                        newGroupValue = newGroupValue.map(() => {
                          return [...prev_g, ...behind_g];
                        });
                        newCountValue = newCountValue.map(() => {
                          return [...prev_c, ...behind_c];
                        });
                      }

                      newDeloadDegree.forEach((item) => {
                        item.splice(valueAsNumber);
                      });
                    }
                    return {
                      ...prev,
                      deloadWeekCount: {
                        ...prev.deloadWeekCount,
                        value: valueAsNumber,
                      },
                      group: {
                        ...prev.group,
                        value: newGroupValue,
                      },
                      count: {
                        ...prev.count,
                        value: newCountValue,
                      },
                      deloadDegree: {
                        ...prev.deloadDegree,
                        value: newDeloadDegree,
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
          </Box>
          <Box w="20%">
            <FormControl display="flex" flexDirection="column">
              <FormLabel>请输入中周期缓冲区比率</FormLabel>
              <VStack align="normal">
                <NumberInput
                  precision={2}
                  step={0.01}
                  defaultValue={0}
                  value={rules.buffer.value}
                  min={0}
                  max={500}
                  onChange={(valueAsString, valueAsNumber) =>
                    setRules((prev) => {
                      return {
                        ...prev,
                        buffer: {
                          ...prev.buffer,
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
              </VStack>
            </FormControl>
          </Box>
        </HStack>
        <HStack spacing="20px">
          <Box>
            <FormControl>
              <FormLabel>请输入中周期目标动作组数</FormLabel>
              {new Array(rules.cycleCount.value).fill().map((c, cIdx) => (
                <Flex justify="space-between" gap="8px" key={cIdx}>
                  {rules.progressiveOverloadWeekCount.value +
                    rules.deloadWeekCount.value >
                  0
                    ? new Array(
                        rules.progressiveOverloadWeekCount.value +
                          rules.deloadWeekCount.value,
                      )
                        .fill()
                        .map((x, i) => (
                          <VStack key={i} align="normal">
                            <span>
                              {`循环${cIdx + 1}`}-{getWeekLabel(i)}
                            </span>
                            <NumberInput
                              defaultValue={0}
                              value={
                                rules.group.value[cIdx]
                                  ? rules.group.value[cIdx][i]
                                  : 0
                              }
                              min={1}
                              max={500}
                              onChange={(valueAsString, valueAsNumber) =>
                                setRules((prev) => {
                                  return {
                                    ...prev,
                                    group: {
                                      ...prev.group,
                                      value: prev.group.value.map((x, xi) => {
                                        if (xi === cIdx) {
                                          return x.map((g, gi) => {
                                            if (gi === i) {
                                              g = valueAsNumber;
                                            }
                                            return g;
                                          });
                                        } else {
                                          return x;
                                        }
                                      }),
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
                          </VStack>
                        ))
                    : '请在上方输入中周期超负荷/减载周数'}
                </Flex>
              ))}

              {/* {
              Array.from({ length: rules.progressiveOverloadWeekCount.value +
                rules.isdeloadWeekBreak }, () => new Array(n).fill(false))
            } */}
            </FormControl>
          </Box>
        </HStack>
        <HStack spacing="20px">
          <Box>
            <FormControl>
              <FormLabel>请输入中周期目标动作次数</FormLabel>
              {new Array(rules.cycleCount.value).fill().map((c, cIdx) => (
                <Flex key={cIdx} justify="space-between" gap="8px">
                  {rules.progressiveOverloadWeekCount.value +
                    rules.deloadWeekCount.value >
                  0
                    ? new Array(
                        rules.progressiveOverloadWeekCount.value +
                          rules.deloadWeekCount.value,
                      )
                        .fill()
                        .map((x, i) => (
                          <VStack key={i} align="normal">
                            <span>
                              {`循环${cIdx + 1}`}-{getWeekLabel(i)}
                            </span>

                            <NumberInput
                              defaultValue={0}
                              value={
                                rules.count.value[cIdx]
                                  ? rules.count.value[cIdx][i]
                                  : 0
                              }
                              min={1}
                              max={500}
                              onChange={(valueAsString, valueAsNumber) =>
                                setRules((prev) => {
                                  return {
                                    ...prev,
                                    count: {
                                      ...prev.count,
                                      value: prev.count.value.map((x, xi) => {
                                        if (xi === cIdx) {
                                          return x.map((g, gi) => {
                                            if (gi === i) {
                                              g = valueAsNumber;
                                            }
                                            return g;
                                          });
                                        } else {
                                          return x;
                                        }
                                      }),
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
                          </VStack>
                        ))
                    : '请在上方输入中周期超负荷/减载周数'}
                </Flex>
              ))}
            </FormControl>
          </Box>
        </HStack>
        <HStack spacing="20px">
          <Box>
            <FormControl>
              <FormLabel>减载周是否分段</FormLabel>
              <RadioGroup
                onChange={(val) =>
                  setRules((prev) => {
                    return {
                      ...prev,
                      isdeloadWeekBreak: {
                        ...prev.isdeloadWeekBreak,
                        value: val === '1',
                      },
                    };
                  })
                }
                value={rules.isdeloadWeekBreak.value === true ? '1' : '0'}>
                若分段代表减载周数为 1 周，生成分段减载周 W-X.1 W-X.2 ...
                <Stack direction="row">
                  <Radio value="1">是</Radio>
                  <Radio value="0">否</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
          </Box>
        </HStack>
        <HStack spacing="20px">
          <FormControl>
            <FormLabel>请输入中周期渐进超负荷强度递增比率</FormLabel>
            {new Array(rules.cycleCount.value).fill().map((c, cIdx) => (
              <Flex gap="8px" key={cIdx}>
                {rules.progressiveOverloadWeekCount.value > 0
                  ? new Array(rules.progressiveOverloadWeekCount.value)
                      .fill()
                      .map((x, i) => (
                        <VStack key={i} align="normal">
                          <span>
                            {`循环${cIdx + 1}`}-{getWeekLabel(i)}
                          </span>
                          <NumberInput
                            precision={2}
                            step={0.01}
                            defaultValue={0}
                            value={rules.overloadIncreaseDegree?.value[cIdx][i]}
                            min={0}
                            max={500}
                            onChange={(valueAsString, valueAsNumber) =>
                              setRules((prev) => {
                                return {
                                  ...prev,
                                  overloadIncreaseDegree: {
                                    ...prev.overloadIncreaseDegree,
                                    value:
                                      prev.overloadIncreaseDegree.value.map(
                                        (g, idx) => {
                                          if (idx === cIdx) {
                                            g[i] = valueAsNumber;
                                          }
                                          return g;
                                        },
                                      ),
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
                        </VStack>
                      ))
                  : '请在上方输入中周期超负荷周数'}
              </Flex>
            ))}
          </FormControl>
          <FormControl>
            <FormLabel>请输入中周期减载递减比率</FormLabel>
            {new Array(rules.cycleCount.value).fill().map((c, cIdx) => (
              <Flex gap="8px" key={cIdx}>
                {rules.deloadWeekCount.value > 0
                  ? new Array(rules.deloadWeekCount.value)
                      .fill()
                      .map((x, i) => (
                        <VStack key={i} align="normal">
                          <span>
                            {`循环${cIdx + 1}`}-
                            {getWeekLabel(
                              i + rules.progressiveOverloadWeekCount.value,
                            )}
                          </span>
                          <NumberInput
                            precision={2}
                            step={0.01}
                            defaultValue={0}
                            value={rules.deloadDegree.value[cIdx][i]}
                            min={-100}
                            max={500}
                            onChange={(valueAsString, valueAsNumber) =>
                              setRules((prev) => {
                                return {
                                  ...prev,
                                  deloadDegree: {
                                    ...prev.deloadDegree,
                                    value: prev.deloadDegree.value.map(
                                      (g, idx) => {
                                        if (idx === cIdx) {
                                          g[i] = valueAsNumber;
                                        }
                                        return g;
                                      },
                                    ),
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
                        </VStack>
                      ))
                  : '请在上方输入中周期超负荷周数'}
              </Flex>
            ))}
          </FormControl>
        </HStack>
        <HStack spacing="20px">
          <Flex w="50%" gap="20px">
            <FormControl>
              <FormLabel>请输入中周期轻训强度比率</FormLabel>
              {new Array(rules.cycleCount.value).fill().map((c, cIdx) => (
                <VStack key={cIdx} align="normal">
                  <span>{`循环${cIdx + 1}`}</span>
                  <NumberInput
                    precision={2}
                    step={0.01}
                    defaultValue={0}
                    value={rules.lightTrainingDegree.value[cIdx]}
                    min={0}
                    max={500}
                    onChange={(valueAsString, valueAsNumber) =>
                      setRules((prev) => {
                        return {
                          ...prev,
                          lightTrainingDegree: {
                            ...prev.lightTrainingDegree,
                            value: prev.lightTrainingDegree.value.map(
                              (l, idx) => {
                                if (idx === cIdx) {
                                  l = valueAsNumber;
                                }
                                return l;
                              },
                            ),
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
                </VStack>
              ))}
            </FormControl>

            <FormControl display="flex" flexDirection="column">
              <FormLabel>请输入循环衔接渐进超负荷比率</FormLabel>
              {new Array(rules.cycleCount.value - 1).fill().map((c, cIdx) => (
                <VStack key={cIdx} align="normal">
                  <span>{`循环${cIdx + 1}-循环${cIdx + 2}`}</span>
                  <NumberInput
                    precision={2}
                    step={0.01}
                    defaultValue={0}
                    value={rules.cycleConnection.value[cIdx]}
                    min={0}
                    max={500}
                    onChange={(valueAsString, valueAsNumber) =>
                      setRules((prev) => {
                        return {
                          ...prev,
                          cycleConnection: {
                            ...prev.cycleConnection,
                            value: prev.cycleConnection.value.map((g, idx) => {
                              if (idx === cIdx) {
                                g = valueAsNumber;
                              }
                              return g;
                            }),
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
                </VStack>
              ))}
            </FormControl>
          </Flex>
        </HStack>
        <Button colorScheme="green" onClick={handler}>
          Go!
        </Button>
      </Box>

      {/* <FormControl isInvalid={!verifyRuleHandler('oneRM')}>
        <FormLabel>Week1 组数/次数</FormLabel>
      </FormControl> */}
    </VStack>
  );
}
