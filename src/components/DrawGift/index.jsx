import React, { useEffect, useState } from "react";
import { ChakraProvider, Button } from "@chakra-ui/react";
import GrawItem from "./item";
import s from "./styles.module.css";

export default function DrawGift(props = {}) {
  const metaList = [
    {
      name: "原味白米粽",
      src: "https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/seagull/zz-nuomi.png",
      step: 0,
    },
    {
      name: "蜜枣甜粽",
      src: "https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/seagull/zz-mizao.png",
      step: 0,
    },
    {
      name: "豆沙红豆粽",
      src: "https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/seagull/zz-dousha.png",
      step: 0,
    },
    {
      name: "蛋黄鲜肉粽",
      src: "https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/seagull/zz-danhuang.png",
      step: 0,
    },
    {
      name: "紫薯糯米粽",
      src: "https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/seagull/zz-zishu.png",
      step: 0,
    },
    {
      name: "蜂蜜粽",
      src: "https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/seagull/zz-fengmi.png",
      step: 0,
    },
    {
      name: "八宝粽",
      src: "https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/seagull/zz-babao.png",
      step: 0,
    },
    {
      name: "紫米芋泥粽",
      src: "https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/seagull/zz-yuni.png",
      step: 0,
    },
    {
      name: "惊喜兔兔粽",
      src: "https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/seagull/zz-rabbit3.jpg",
      step: 0,
    },
  ];

  const [drawList, setDrawList] = useState([]);
  const [drawCount, setDrawCount] = useState(3);

  useEffect(() => {
    setDrawList(metaList.sort((x) => Math.random() - 0.5));
  }, []);

  const init = () => {
    setDrawList(metaList.sort((x) => Math.random() - 0.5));
    setDrawCount(3);
  };

  return (
    <ChakraProvider resetCSS={false} disableGlobalStyle={true}>
      <p className={s.title}>
        🍃端午安康，做梦包了几个可香可香的粽子回来，您来抓个盲粽品尝一下吧~
        剩余次数：
        {drawCount}
      </p>

      <div className={s.box}>
        {drawList.map((listItem) => (
          <GrawItem
            listItem={listItem}
            setDrawCount={setDrawCount}
            setDrawList={setDrawList}
            drawList={drawList}
            drawCount={drawCount}
          />
        ))}
      </div>
      <div className={s.again}>
        {drawCount === 0 ? (
          <div>
            <div>
              {/* (注：惊喜海鸥粽是之前码头餐厅大厨包的，不是海鸥馅，唔，可爱海鸥不能吃🤤) */}
              （没有海鸥了，只有您，只有可爱的小兔兔，可爱的小兔兔馅可不能吃哦）
            </div>
            <Button onClick={() => init()}>这次不算再来一次!</Button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </ChakraProvider>
  );
}
