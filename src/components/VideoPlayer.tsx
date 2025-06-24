
interface VideoPlayerProps {
  videoId: string;
  title: string;
}

const VideoPlayer = ({ videoId, title }: VideoPlayerProps) => {
  return (
    <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full rounded-lg"
      />
    </div>
  );
};

export default VideoPlayer;
