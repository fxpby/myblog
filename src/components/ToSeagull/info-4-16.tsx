import React, { useState, useEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const MyComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("请输入暗号");
  const [isShow, setIsShow] = useState(false);
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const { blogPost250416 = "" } = customFields;
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleVerify = () => {
    if (inputValue.trim() === "seagull" || inputValue.trim() === "海鸥") {
      setMessage("大厨太棒啦，校验通过！");
      setIsShow(true);
    } else {
      setMessage("嘤嘤校验失败，请重新输入暗号。");
      setInputValue("");
      setIsShow(false);
    }
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleVerify}>校验</button>
      <p>{message}</p>
      {isShow ? (
        <div dangerouslySetInnerHTML={{ __html: blogPost250416 }}></div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MyComponent;
