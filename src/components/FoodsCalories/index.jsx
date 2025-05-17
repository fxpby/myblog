import React, { useEffect, useState } from "react";
import {
  ChakraProvider,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import s from "./styles.module.css";
import data from "./../../metadata/food-calories.json";

export default function Calculator(props = {}) {
  const { foods: displayFoods, extra } = props;

  const [basicData, setBaseData] = useState([]);
  const [extraData, setExtraData] = useState({});
  const [totalData, setTotalData] = useState({});

  useEffect(() => {
    console.log(data);
  }, []);

  const getItemValue = ({ value, name, type } = {}) => {
    return (
      data.find((item) => item.name === name)[type] *
      (Number(value) / 100).toFixed(2)
    );
  };

  return (
    <ChakraProvider resetCSS={false} disableGlobalStyle={true}>
      {displayFoods.map((item) => (
        <div className={s.foodItemWrap}>
          <div>{item.name}</div>
          <div className={s.foodItem}>
            c:
            <NumberInput
              defaultValue={0}
              value={getItemValue({
                value: item.value,
                name: item.name,
                type: "c",
              })}
              min={0}
              max={10000}
              onChange={() => {}}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </div>
          <div className={s.foodItem}>
            p:
            <NumberInput
              defaultValue={0}
              value={getItemValue({
                value: item.value,
                name: item.name,
                type: "p",
              })}
              min={0}
              max={10000}
              onChange={() => {}}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </div>
          <div className={s.foodItem}>
            f:
            <NumberInput
              defaultValue={0}
              value={getItemValue({
                value: item.value,
                name: item.name,
                type: "f",
              })}
              min={0}
              max={10000}
              onChange={() => {}}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </div>
        </div>
      ))}
      <div className={s.foodItemWrap}>
        <div>额外数据</div>
        <div className={s.foodItem}>
          c:
          <NumberInput
            defaultValue={0}
            value={extra.c}
            min={0}
            max={10000}
            onChange={() => {}}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </div>
        <div className={s.foodItem}>
          p:
          <NumberInput
            defaultValue={0}
            value={extra.p}
            min={0}
            max={10000}
            onChange={() => {}}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </div>
        <div className={s.foodItem}>
          f:
          <NumberInput
            defaultValue={0}
            value={extra.f}
            min={0}
            max={10000}
            onChange={() => {}}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </div>
      </div>
    </ChakraProvider>
  );
}
