import Tweet from "./tweet";
import "./tweetters.css";

function Tweetters({ tweet }) {
  return (
    <ul className="tweets">
      {tweet.map((el, idx) => (
        <Tweet
          key={idx}
          title={el.content}
          username={el.username}
          date={el.date}
          icon={el.icon}
        />
      ))}
    </ul>
  );
}

export default Tweetters;
