const icon = ["ðž", "ðŧââïļ", "ðŊ", "ðĶ", "ðŪ", "ð·", "ðĪ", "ð", "ðĶ"];
function randomNumber() {
  return Math.floor(Math.random() * 9);
}

const dummyDate = [
  {
    id: 1,
    icon: icon[randomNumber()],
    username: "ęđėĐí",
    date: new Date().toISOString(),
    content: "ėëíėļė",
  },
  {
    id: 2,
    icon: icon[randomNumber()],
    username: "ęđíė°",
    date: new Date().toISOString(),
    content: "ėëíėļė",
  },
  {
    id: 3,
    icon: icon[randomNumber()],
    username: "ęđíė",
    date: new Date().toISOString(),
    content: "ėëíėļė",
  },
  {
    id: 4,
    icon: icon[randomNumber()],
    username: "ėīė°Žė",
    date: new Date().toISOString(),
    content: "ėëíėļė",
  },
  {
    id: 5,
    icon: icon[randomNumber()],
    username: "ėīėĪíļ",
    date: new Date().toISOString(),
    content: "ėëíėļė",
  },
];

export default dummyDate;
