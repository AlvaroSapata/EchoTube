import React from "react";
import "./PlayVideo.css";
import video1 from "../../assets/video1.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profie from "../../assets/user_profile.jpg";

const PlayVideo = ({videoId}) => {
  return (
    <div className="play-video">
      {/* <video src={video1} controls autoPlay muted></video> */}
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>Best Youtube chanel to learn Web Development</h3>
      <div className="play-video-info">
        <p>8376 Views &bull; 5 days ago</p>
        <div>
          <span>
            <img src={like} alt="like" />
            98
          </span>
          <span>
            <img src={dislike} alt="dislike" />
            17
          </span>
          <span>
            <img src={share} alt="share" />
            Share
          </span>
          <span>
            <img src={save} alt="save" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>Codedev</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Chanel that shows videos to learn</p>
        <p>Subscribe Codedev to learn more</p>
        <hr />
        <h4>27 comments</h4>
        <div className="comment">
          <img src={user_profie} alt="" />
          <div>
            <h3>
              John Smith <span>14 hours ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              justo nisl, convallis lacinia dolor ut, iaculis porta odio. Nulla
              facilisi. Pellentesque interdum mauris dignissim, tempor tellus
              nec, maximus mauris.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>17</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profie} alt="" />
          <div>
            <h3>
              John Smith <span>14 hours ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              justo nisl, convallis lacinia dolor ut, iaculis porta odio. Nulla
              facilisi. Pellentesque interdum mauris dignissim, tempor tellus
              nec, maximus mauris.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>17</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profie} alt="" />
          <div>
            <h3>
              John Smith <span>14 hours ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              justo nisl, convallis lacinia dolor ut, iaculis porta odio. Nulla
              facilisi. Pellentesque interdum mauris dignissim, tempor tellus
              nec, maximus mauris.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>17</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
