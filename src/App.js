import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Tweetters from "./components/tweetters";
import dummyDate from "./date/date";
import Form from "./components/form";

function App() {
  const dummy = dummyDate;

  const [button, setButton] = useState(dummy);
  console.log(button);

  const tweetPlus = (tweet) => {
    setButton([...button, tweet]);
  };

  return (
    <div className="a">
      <Form tweetSum={tweetPlus} />
      <Tweetters tweet={button} />
    </div>
  );
}

export default App;

//상태를 어디서 관리하고 있는지~ 그리고 유즈스테이츠는 셋함수로밖에 변경이 안되잖아
//그니깐 그 변경을 변수로 내려주는게 아니라 셋 함수를 내려주는거라구요
//자식한테 그럼 자식이 그 상태를 변경할수 있는 열쇠를 가지고있는거잖아요!
//
//여기서도 셋 버튼을 폼으로 내려줬어요 내려줬다는 뜻은 부모 컴포넌트인 앱에서 폼으로 내려줬다는 뜻
//폼에서 앱 제이에스에 상태를 변경할수 있는거다.

//정리
//그니깐은
