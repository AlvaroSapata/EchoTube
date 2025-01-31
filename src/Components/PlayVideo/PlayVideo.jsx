import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
import video1 from "../../assets/video1.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profie from "../../assets/user_profile.jpg";
import { value_converter } from "../../data";
import moment from "moment/moment";

const API_KEY = import.meta.env.VITE_API_KEY;

const PlayVideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState(null);

  const fetchVideoData = async () => {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((response) => response.json())
      .then((data) => setApiData(data.items[0]));
  };

  const fetchChannelData = async () => {
    const channelDetails_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;

    await fetch(channelDetails_url)
      .then((response) => response.json())
      .then((data) => setChannelData(data.items[0]));
  };

  const fetchCommentData = async () => {
    const commentDetails_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;

    await fetch(commentDetails_url)
      .then((response) => response.json())
      .then((data) => setCommentData(data.items));
  }

  useEffect(() => {
    fetchVideoData();
  }, []);

  useEffect(() => {
    fetchChannelData();
  }, [apiData]);

  useEffect(() => {
    fetchVideoData();
  }, []);

  return (
    <div className="play-video">
      {/* <video src={video1} controls autoPlay muted></video> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3>{apiData?.snippet?.title || "Title Here"}</h3>

      <div className="play-video-info">
        <p>
          {apiData?.statistics?.viewCount
            ? value_converter(apiData.statistics.viewCount)
            : "16k"}{" "}
          Views &bull;
          {apiData?.snippet?.publishedAt
            ? moment(apiData.snippet.publishedAt).fromNow()
            : "some time ago"}
        </p>

        <div>
          <span>
            <img src={like} alt="like" />
            {apiData?.statistics?.likeCount
              ? value_converter(apiData.statistics.likeCount)
              : 17}
          </span>
          <span>
            <img src={dislike} alt="dislike" />
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
        <img
          src={channelData?.snippet?.thumbnails?.default?.url || ""}
          alt=""
        />
        <div>
          <p>{apiData?.snippet?.channelTitle || ""}</p>
          <span>{channelData?.statistics?.subscriberCount ? value_converter(channelData.statistics.subscriberCount) : "1M"}</span>
        </div>

        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>{apiData?.snippet?.description || ""}</p>
        <hr />
        <h4>
          {apiData?.statistics?.commentCount
            ? value_converter(apiData.statistics.commentCount)
            : 158}
        </h4>
        
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
