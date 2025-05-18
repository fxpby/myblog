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

  const getItemValue = ({ value, name, type } = {}) => {
    return (
      data.find((item) => item.name === name)[type] *
      (Number(value) / 100).toFixed(2)
    );
  };

  useEffect(() => {
    if (basicData.length) {
      setTotalData({
        c:
          basicData
            .map((x) =>
              getItemValue({ value: x.value, name: x.name, type: "c" })
            )
            .reduce((p, c) => p + c) + Number(extraData.c),
        p:
          basicData
            .map((x) =>
              getItemValue({ value: x.value, name: x.name, type: "p" })
            )
            .reduce((p, c) => p + c) + Number(extraData.p),
        f:
          basicData
            .map((x) =>
              getItemValue({ value: x.value, name: x.name, type: "f" })
            )
            .reduce((p, c) => p + c) + Number(extraData.f),
      });
    }
  }, [basicData, extraData]);

  useEffect(() => {
    setExtraData(extra);
    if (displayFoods) {
      setTotalData({
        c:
          displayFoods
            .map((x) =>
              getItemValue({ value: x.value, name: x.name, type: "c" })
            )
            .reduce((p, c) => p + c) + Number(extra.c),
        p:
          displayFoods
            .map((x) =>
              getItemValue({ value: x.value, name: x.name, type: "p" })
            )
            .reduce((p, c) => p + c) + Number(extra.p),
        f:
          displayFoods
            .map((x) =>
              getItemValue({ value: x.value, name: x.name, type: "f" })
            )
            .reduce((p, c) => p + c) + Number(extra.f),
      });
    }
  }, [displayFoods, extra]);

  return (
    <ChakraProvider resetCSS={false} disableGlobalStyle={true}>
      {basicData.map((item) => (
        <div className={s.foodItemWrap}>
          <div className={s.foodItem}>
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
          <div className={s.foodItem}>
            c:
            {getItemValue({
              value: item.value,
              name: item.name,
              type: "c",
            }).toFixed(1)}
            g
          </div>
          <div className={s.foodItem}>
            p:
            {getItemValue({
              value: item.value,
              name: item.name,
              type: "p",
            }).toFixed(1)}
            g
          </div>
          <div className={s.foodItem}>
            f:
            {getItemValue({
              value: item.value,
              name: item.name,
              type: "f",
            }).toFixed(1)}
            g
          </div>
        </div>
      ))}
      <div className={s.foodItemWrap}>
        <div>额外数据</div>
        <div className={s.foodItem}>
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
        <div className={s.foodItem}>
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
        <div className={s.foodItem}>
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
      <div className={s.foodItemWrap}>
        <div>总数据一览</div>
        <div className={s.foodItem}>c:{totalData.c?.toFixed(1)}g</div>
        <div className={s.foodItem}>p:{totalData.p?.toFixed(1)}g</div>
        <div className={s.foodItem}>f:{totalData.f?.toFixed(1)}g</div>
      </div>
    </ChakraProvider>
  );
}
