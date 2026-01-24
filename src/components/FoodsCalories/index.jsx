import React, { useEffect, useState } from "react";
import {
  ChakraProvider,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  ListItem,
  UnorderedList,
  Box,
} from "@chakra-ui/react";
import data from "./../../metadata/food-calories.json";

const styles = {
  foodItemWrap: {
    padding: '10px',
  },
  foodItem: {
    padding: '6px',
    display: 'flex',
    columnGap: '10px',
    alignItems: 'center',
  },
};

export default function Calculator(props = {}) {
  const { foods: displayFoods, extra } = props;

  const [basicData, setBaseData] = useState([]);
  const [extraData, setExtraData] = useState({});
  const [totalData, setTotalData] = useState({});

  const getItemValue = ({ value, name, type } = {}) => {
    return (
      data.find((item) => item.name === name)[type] *
      (Number(value) / 100).toFixed(2)
    );
  };

  const getCalcTotalItemValue = (basicData, extraData, type) => {
    return (
      basicData
        .map((x) => getItemValue({ value: x.value, name: x.name, type }))
        .reduce((p, c) => p + c) + Number(extraData[type])
    );
  };

  useEffect(() => {
    if (basicData.length) {
      setTotalData({
        c: getCalcTotalItemValue(basicData, extraData, "c"),
        p: getCalcTotalItemValue(basicData, extraData, "p"),
        f: getCalcTotalItemValue(basicData, extraData, "f"),
      });
    }
  }, [basicData, extraData]);

  useEffect(() => {
    setExtraData(extra);
    setBaseData(displayFoods);
    setExtraData(extra);
    if (displayFoods) {
      setTotalData({
        c: getCalcTotalItemValue(displayFoods, extra, "c"),
        p: getCalcTotalItemValue(displayFoods, extra, "p"),
        f: getCalcTotalItemValue(displayFoods, extra, "f"),
      });
    }
  }, [displayFoods, extra]);

  return (
    <ChakraProvider resetCSS={false} disableGlobalStyle={true}>
      {basicData.map((item, i) => (
        <div style={styles.foodItemWrap} key={i}>
          <div style={styles.foodItem}>
            {item.name} -{" "}
            <NumberInput
              defaultValue={0}
              value={item.value}
              min={0}
              max={10000}
              onChange={(valueAsString, valueAsNumber) =>
                setBaseData((prev) => {
                  return prev.map((x) => {
                    if (x.name === item.name) {
                      x.value = valueAsNumber;
                    }
                    return x;
                  });
                })
              }
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            g
          </div>

          <UnorderedList>
            <ListItem>
              c:{" "}
              {getItemValue({
                value: item.value,
                name: item.name,
                type: "c",
              }).toFixed(1)}
              g
            </ListItem>
            <ListItem>
              p:{" "}
              {getItemValue({
                value: item.value,
                name: item.name,
                type: "p",
              }).toFixed(1)}
              g
            </ListItem>
            <ListItem>
              f:{" "}
              {getItemValue({
                value: item.value,
                name: item.name,
                type: "f",
              }).toFixed(1)}
              g
            </ListItem>
          </UnorderedList>
        </div>
      ))}
      <div style={styles.foodItemWrap}>
        <div>额外数据</div>
        <div style={styles.foodItem}>
          c:
          <NumberInput
            defaultValue={0}
            value={extraData.c}
            min={0}
            max={10000}
            onChange={(valueAsString, valueAsNumber) =>
              setExtraData((prev) => {
                return {
                  ...prev,
                  c: valueAsNumber,
                };
              })
            }
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </div>
        <div style={styles.foodItem}>
          p:
          <NumberInput
            defaultValue={0}
            value={extraData.p}
            min={0}
            max={10000}
            onChange={(valueAsString, valueAsNumber) =>
              setExtraData((prev) => {
                return {
                  ...prev,
                  p: valueAsNumber,
                };
              })
            }
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </div>
        <div style={styles.foodItem}>
          f:
          <NumberInput
            defaultValue={0}
            value={extraData.f}
            min={0}
            max={10000}
            onChange={(valueAsString, valueAsNumber) =>
              setExtraData((prev) => {
                return {
                  ...prev,
                  f: valueAsNumber,
                };
              })
            }
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </div>
      </div>
      <Box>
        <div style={styles.foodItemWrap}>
          <p>总数据一览</p>
          <UnorderedList>
            <ListItem>c: {totalData.c?.toFixed(1)}g</ListItem>
            <ListItem>p: {totalData.p?.toFixed(1)}g</ListItem>
            <ListItem>f: {totalData.f?.toFixed(1)}g</ListItem>
          </UnorderedList>
        </div>
      </Box>
    </ChakraProvider>
  );
}
