import React, { useRef, useState } from "react";

const TextareaAutoResize = () => {
    const [text, settext] = useState("demo");
    const textareaRef = useRef(null);
    const [textareaHeight, setTextareHeight] = useState("auto");
    const [parentHeight, setParentHeight] = useState("auto");
    const handleChange = (event) =>{
    console.log(event.target.value)
    const heightTxt = textareaRef?.current?.scrollHeight;
    setTextareHeight(heightTxt);
    setParentHeight(heightTxt);

    settext(event.target.value)
    }
  return (
    <div className="p-5" style={{minHeight: parentHeight}}>
      <textarea
        name=""
        id=""
        className="w-full max-w-[400px] p-5 outline-gray-300 rounded-lg border-gray-300 focus:outline-blue-400 resize-none"
        placeholder="Please enter your content..."
        value={text}
        ref={textareaRef}
        style={{
            height: textareaHeight
        }}
        onChange={handleChange}
      >
        
      </textarea>
    </div>
  );
};

export default TextareaAutoResize;
