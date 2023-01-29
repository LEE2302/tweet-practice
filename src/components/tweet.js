import "./tweet.css";

function Tweet({ title, username, date, icon }) {
  return (
    <li className="tweet">
      <div>
        <div className="tweet__profile">
          <div>{icon}</div>
        </div>
        <div>
          <div className="tweet__content">
            <div className="tweet__userInfo">
              <span className="tweet__username">{username}</span>
              <span className="tweet__createdAt">{date}</span>
            </div>
            <div className="tweet__message">{title}</div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Tweet;
