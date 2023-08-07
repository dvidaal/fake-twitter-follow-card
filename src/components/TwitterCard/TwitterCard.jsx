import { useState } from "react";
import "./TwitterCard.css";

const TwitterCard = ({ children, userName, initialIsFollowing }) => {
  const [setIsFollowing, unsetIsFollowing] = useState(initialIsFollowing);

  const followText = setIsFollowing ? "Following" : "Follow";

  const buttonFollow = setIsFollowing
    ? "twitter-box-followCard-button is-following"
    : "twitter-box-followCard-button";

  const handleFollow = () => {
    unsetIsFollowing(!setIsFollowing);
  };

  return (
    <>
      <article className="twitter-box">
        <header className="twitter-box__name">
          <img
            className="twitter-box__avatar"
            src={`https://unavatar.io/twitter/${userName}`}
            alt="User avatar"
          />
        </header>
        <div className="twitter-box__username">
          <strong> {children} </strong>
          <span className="twitter-box__username info">{userName}</span>
        </div>

        <aside>
          <button className={buttonFollow} onClick={handleFollow}>
            <span className="twitter-box-followCard-text">{followText}</span>
            <span className="twitter-box-followCard-unfollow">Unfollow</span>
          </button>
        </aside>
      </article>
    </>
  );
};

export default TwitterCard;
