import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import ReactPlayer from "react-player";
import VideoInfo from "./VideoInfo";
import ChannelInfo from "./ChannelInfo";
import VideoCard from "../../components/VideoCard";
import Comments from "./Comments";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState(null);
  //1. Arama parametrelerine erisim icin kurulum
  const [searchParams] = useSearchParams();

  //2. url'den 'v' isimli parametreye eris
  const id = searchParams.get("v");

  //3. id'si bilinen videonun bi;gilerini api'den al

  useEffect(() => {
    api
      .get(`/video/info?id=${id}&extend=1`)
      .then((res) => setVideo(res.data))
      .catch((err) => console.log(err));

    api
      .get(`https://yt-api.p.rapidapi.com/comments?id=${id}`)
      .then((res) => setComments(res.data));
  }, [id]);
  return (
    <div className="detail-page h-screen overflow-auto ">
      {/* video icerigi */}
      <div>
        <div className="h-[50vh] lg:h-[60vh] rounded-md overflow-hidden">
          <ReactPlayer
            controls
            light
            width={"100%"}
            height={"100%"}
            url={`https://www.youtube.com/watch?v=${id}`}
          />
        </div>

        {!video && <p>YUKLENIYOR</p>}

        {video && (
          <>
            {/* baslik */}
            <h1 className="my-3 text-xl font-bold">{video.title}</h1>

            {/* kanal bilgileri */}
            <ChannelInfo video={video} />

            {/* video bilgileri */}
            <VideoInfo video={video} />

            {/* yorumlar */}
            <Comments data={comments} />
          </>
        )}
      </div>

      {/* alakali videolar */}
      <div className="flex flex-col gap-5 p-1">
        {video?.relatedVideos.data.map(
          (item) =>
            item.type === "video" && (
              <VideoCard key={item.videoId} video={item} isRow={true} />
            )
        )}
      </div>
    </div>
  );
};

export default VideoDetail;
