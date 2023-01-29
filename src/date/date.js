const icon = ["🐼", "🐻‍❄️", "🐯", "🦁", "🐮", "🐷", "🐤", "🐗", "🦄"];
function randomNumber() {
  return Math.floor(Math.random() * 9);
}

const dummyDate = [
  {
    id: 1,
    icon: icon[randomNumber()],
    username: "김용훈",
    date: new Date().toISOString(),
    content: "안녕하세요",
  },
  {
    id: 2,
    icon: icon[randomNumber()],
    username: "김현우",
    date: new Date().toISOString(),
    content: "안녕하세요",
  },
  {
    id: 3,
    icon: icon[randomNumber()],
    username: "김태영",
    date: new Date().toISOString(),
    content: "안녕하세요",
  },
  {
    id: 4,
    icon: icon[randomNumber()],
    username: "이찬영",
    date: new Date().toISOString(),
    content: "안녕하세요",
  },
  {
    id: 5,
    icon: icon[randomNumber()],
    username: "이윤호",
    date: new Date().toISOString(),
    content: "안녕하세요",
  },
];

export default dummyDate;
