import React, { useState } from "react";
import dummyDate from "../date/date";
import Tweetters from "./tweetters";

function Form({ button, setButton }) {
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");

  function usernameHandler(event) {
    setUsername(event.target.value);
  }

  function contentHandler(event) {
    setContent(event.target.value);
  }

  function buttonHandler(event) {
    event.preventDefault();

    const tweet = {
      id: button.length + 1,
      icon: "🐷",
      username: username,
      date: new Date().toISOString(),
      content: content,
    };

    setButton([...button, tweet]);
    console.log(button);
    setUsername("");
    setContent("");
  }

  return (
    <form onSubmit={buttonHandler}>
      <div>아이콘</div>
      <div>
        <div>
          {/* username */}
          <input
            type="text"
            placeholder="이름을 적어주세요."
            value={username}
            onChange={usernameHandler}
          />
        </div>
        <div>
          {/* content */}
          <textarea
            placeholder="내용을 적어주세요."
            value={content}
            onChange={contentHandler}
          />
        </div>
      </div>
      <div>
        {/* button */}
        <button type="submit">등록</button>
      </div>
    </form>
  );
}

export default Form;
