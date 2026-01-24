import React, { useState } from "react";

interface PostContentProps {
  blogPostId: string;
}

const PostContent: React.FC<PostContentProps> = ({ blogPostId }) => {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("请输入暗号");
  const [isShow, setIsShow] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleVerify = () => {
    if (inputValue.trim() === "imaimauo") {
      setMessage("太棒啦，校验通过！✌️");
      setIsShow(true);
    } else {
      setMessage("嘤嘤校验失败，请重新输入暗号。🤧（暗号是您用户名）");
      setInputValue("");
      setIsShow(false);
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem' }}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="输入暗号..."
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '1rem',
          }}
        />
        <button
          onClick={handleVerify}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#2e8555',
            color: 'white',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
        >
          校验
        </button>
      </div>
      <p style={{ color: isShow ? '#2e8555' : '#666' }}>{message}</p>
      {isShow && blogPostId && (
        <div
          dangerouslySetInnerHTML={{ __html: blogPostId }}
          style={{ marginTop: '1rem' }}
        />
      )}
    </div>
  );
};

export default PostContent;
