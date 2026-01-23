import React, { useState } from "react";
import {
  ChakraProvider,
  Button,
  PinInput,
  PinInputField,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

axios.defaults.timeout = 100000;
axios.defaults.baseURL = "https://serendipityhaven.com/myapi";

const defaultDogList = [
  "https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/dogs/dog1.jpg",
  "https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/dogs/dog2.jpg",
  "https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/dogs/dog3.jpg",
  "https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/dogs/dog4.jpg",
  "https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/dogs/dog5.jpg",
];

const getRandomInt = (min = 0, max = 4) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

export default function HeartPage() {
  const [isShowHeart, setIsShowHeart] = useState(false);
  const [dogIndex, setDogIndex] = useState(getRandomInt());
  const [isShowInputTip, setIsShowInputTip] = useState(false);

  const toast = useToast();

  const handleChangeDogIndex = () => {
    setDogIndex(getRandomInt());
  };

  const handleClickHeart = () => {
    try {
      const p = axios.get(`/click-heart`);
      toast.promise(p, {
        success: { title: "已收到拍拍~", description: "嘿嘿，返回一个抱抱~" },
        error: { title: "嘤嘤嘤", description: "服务器应该是挂了..." },
        loading: { title: "请等等", description: "网络可能有点慢" },
      });
    } catch (err) {
      console.log("err: ", err);
    }
  };

  const inputOnComplete = (value: string) => {
    if (value !== "imaimauo") {
      setIsShowInputTip(true);
    } else {
      setIsShowHeart(true);
      setIsShowInputTip(false);
    }
  };

  return (
    <ChakraProvider resetCSS={false} disableGlobalStyle={true}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
          fontSize: "20px",
          columnGap: "100px",
          flexWrap: "wrap",
          padding: "2rem",
          rowGap: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "20px",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: 200, height: 200, borderRadius: 8 }}
            src={defaultDogList[dogIndex]}
            alt="可爱的小狗"
          />
          <Button
            style={{ cursor: "pointer" }}
            onClick={() => handleChangeDogIndex()}
          >
            切换小狗头像
          </Button>
        </div>
        {!isShowHeart && (
          <div style={{ maxWidth: 400 }}>
            <p>Hello~欢迎来到这个爱心小小陆~ 🥳</p>
            <p style={{ marginBottom: "1rem" }}>小小陆的隐藏魔法需要口令开启哦，欢迎尝试魔法口令</p>
            <div
              style={{
                columnGap: "10px",
                display: "flex",
              }}
            >
              <PinInput
                onComplete={(val) => inputOnComplete(val)}
                type="alphanumeric"
              >
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </div>
            {isShowInputTip && (
              <p style={{ color: "#e53e3e", marginTop: "1rem" }}>
                口令不正确哦，请再猜一猜~
              </p>
            )}
          </div>
        )}
        {isShowHeart && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              rowGap: "40px",
            }}
          >
            <p>口令正确~小心心只给您看，您可以点击拍拍哦~</p>
            <div className="heart" onClick={() => handleClickHeart()}></div>
          </div>
        )}
      </div>
      <style>{`
        .heart {
          width: 100px;
          height: 100px;
          background: red;
          box-shadow: 0 0 10px red;
          position: relative;
          transform: rotate(45deg) scale(0.5);
          animation: heartbit 0.5s alternate infinite;
          cursor: pointer;
        }

        .heart::before {
          content: "";
          width: 100px;
          height: 50px;
          background: red;
          box-shadow: 0 0 10px red;
          position: absolute;
          left: 0;
          top: -50px;
          border-radius: 50px 50px 0 0;
        }

        .heart::after {
          content: "";
          width: 50px;
          height: 100px;
          background: red;
          box-shadow: 0 0 10px red;
          position: absolute;
          left: -50px;
          top: 0;
          border-radius: 50px 0 0 50px;
        }

        @keyframes heartbit {
          0% {
            transform: rotate(45deg) scale(0.7);
          }
          100% {
            transform: rotate(45deg) scale(1);
          }
        }
      `}</style>
    </ChakraProvider>
  );
}
