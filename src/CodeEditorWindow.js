// CodeEditorWindow.js

import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Editor from "@monaco-editor/react";

const CodeEditorWindow = ({ onChange, language, code, theme, loading }) => {
  const [value, setValue] = useState(code || "");
  const [typingAnimation, setTypingAnimation] = useState(true);

  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
  };

  const handleThemeChange2 = () => {
    // ... code
  };

  useEffect(() => {
    // Assuming there's a state inside CodeEditorWindow to hold the code
    setValue("");
    setTypingAnimation(true);
    if (loading) {
      const typingInterval = setInterval(() => {
        if (typingAnimation) {
          setValue((prevValue) => {
            const nextChar = code.charAt(prevValue.length);
            if (nextChar === undefined) {
              setTypingAnimation(false);
              clearInterval(typingInterval);
              return code;
            }
            return prevValue + nextChar;
          });
        }
      }, 10);
       // Adjust the interval for the typing speed
    
    return () => clearInterval(typingInterval);
    // loading = false
  } else{
      setValue(code);
    }
}, [code, loading]);
  

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <Editor
        height="85vh"
        width={`100%`}
        language={language || "javascript"}
        value={value}
        theme={theme}
        defaultValue="// some comment"
        onChange={handleEditorChange}
      />
    </div>
  );
};

CodeEditorWindow.propTypes = {
  onChange: PropTypes.func.isRequired,
  language: PropTypes.string,
  code: PropTypes.string,
  theme: PropTypes.string,
  loading: PropTypes.bool
};

export default CodeEditorWindow;