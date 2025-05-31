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
import GrawItem from "./item";
import s from "./styles.module.css";

export default function DrawGift(props = {}) {
  const { listItem, setDrawCount, setDrawList, drawCount, drawList } = props;
  console.log("props: ", props);

  const itemClick = () => {
    if (drawCount <= 0 || listItem.step === 2) {
      return;
    }
    setDrawCount(drawCount - 1);
    setDrawList((prev) => {
      return drawList.map((x) => {
        if (x.name === listItem.name) {
          x.step = 1;
        }
        return x;
      });
    });

    if (drawCount === 1) {
      setDrawList((prev) => {
        return drawList.map((x) => {
          if (x.step !== 1) {
            x.step = 2;
          }
          return x;
        });
      });
    }
  };

  const getBackClass = () => {
    let result = ``;
    if (listItem.step === 1) {
      result = `${s.back} ${s.show}`;
    } else if (listItem.step === 0) {
      result = `${s.back}`;
    } else {
      result = `${s.back} ${s.result}`;
    }
    return result;
  };

  return (
    <ChakraProvider resetCSS={false} disableGlobalStyle={true}>
      <div className={s.item} onClick={itemClick}>
        {/* 前面 */}
        <div className={listItem.step > 0 ? `${s.front} ${s.hide}` : s.front}>
          {listItem.step > 0 ? (
            <div className={s.imgWrap}>
              <img src={listItem.src} alt="" />
              <div>{listItem.name}</div>
            </div>
          ) : (
            "抓幸运粽"
          )}
        </div>
        {/* 后面 */}
        <div className={getBackClass()}>
          {listItem.step > 0 ? (
            <div className={s.imgWrap}>
              <img src={listItem.src} alt="" />
              {listItem.step === 2 ? (
                <div>谢谢惠顾</div>
              ) : (
                <div>{listItem.name}</div>
              )}
            </div>
          ) : (
            "抓幸运粽"
          )}
        </div>
      </div>
    </ChakraProvider>
  );
}
