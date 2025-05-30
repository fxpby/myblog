import React, { useState } from "react";

const usePostHooks = ({ blogPostId } = {}) => {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("请输入暗号");
  const [isShow, setIsShow] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleVerify = () => {
    if (inputValue.trim() === "20241014") {
      setMessage("大厨太棒啦，校验通过！✌️");
      setIsShow(true);
    } else {
      setMessage(
        "嘤嘤校验失败，请重新输入暗号。🤧（暗号已更新为 growth cycle 公开时间年月日 8 位数字哦~）"
      );
      setInputValue("");
      setIsShow(false);
    }
  };

  const contentElement = (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleVerify}>校验</button>
      <p>{message}</p>
      {isShow ? (
        <div dangerouslySetInnerHTML={{ __html: blogPostId }}></div>
      ) : (
        <></>
      )}
    </div>
  );

  return {
    contentElement,
  };
};
export default usePostHooks;
