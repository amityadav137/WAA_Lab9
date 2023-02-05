import { useState } from "react";

import "./PostForm.css";

function PostForm(props) {
  const [inputTitle, setInputTitle] = useState("");

  const clickHandler = () => {
    setInputTitle("");
    props.onTitleChange(inputTitle);
  };

  const handleChange = (event) => {
    const { value } = event.target;

    setInputTitle(value);
  };

  return (
    <div className="post-form mb-8">
      <div className="post-form-field">
        <input value={inputTitle} onChange={handleChange} />
      </div>
      <div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </div>
  );
}

export default PostForm;
