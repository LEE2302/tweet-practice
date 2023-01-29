import Tweet from "./tweet";
import "./tweetters.css";

function Tweetters({ tweet }) {
  console.log(tweet);

  return (
    <ul className="tweets">
      {tweet.map((el) => (
        <Tweet
          key={el.id}
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
