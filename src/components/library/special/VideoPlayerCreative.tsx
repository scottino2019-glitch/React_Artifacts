import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  FastForward,
  Repeat,
  Upload,
  Link as LinkIcon,
  Film,
  Sparkles,
  PictureInPicture2,
  Check,
} from 'lucide-react';

interface VideoSource {
  title: string;
  url: string;
  badge: string;
}

const PRESET_VIDEOS: VideoSource[] = [
  {
    title: 'Big Buck Bunny (Nature Animation HD)',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    badge: 'HD • MP4',
  },
  {
    title: 'Elephants Dream (Sci-Fi Animation)',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    badge: '1080p • MP4',
  },
  {
    title: 'For Bigger Blazes (Action Teaser)',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    badge: 'Action • MP4',
  },
];

export default function VideoPlayerCreative() {
  const [currentVideo, setCurrentVideo] = useState<VideoSource>(PRESET_VIDEOS[0]);
  const [customUrl, setCustomUrl] = useState('');
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isLooping, setIsLooping] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const hideControlsTimerRef = useRef<number | null>(null);

  // Sync volume with video element
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
      videoRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);

  // Sync playback rate
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  // Format seconds to mm:ss
  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds < 0) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
      setIsLoading(false);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
  };

  const handleSkip = (seconds: number) => {
    if (videoRef.current) {
      const nextTime = Math.min(Math.max(0, videoRef.current.currentTime + seconds), duration);
      videoRef.current.currentTime = nextTime;
      setCurrentTime(nextTime);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (val > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;
    try {
      if (!document.fullscreenElement) {
        await containerRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch {
      // Fallback
    }
  };

  const togglePiP = async () => {
    if (!videoRef.current) return;
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
      } else if (document.pictureInPictureEnabled) {
        await videoRef.current.requestPictureInPicture();
      }
    } catch {
      // PiP not supported or denied
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setCurrentVideo({
        title: file.name,
        url: fileUrl,
        badge: `${(file.size / (1024 * 1024)).toFixed(1)} MB • Locale`,
      });
      setIsPlaying(false);
    }
  };

  const handleLoadCustomUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (customUrl.trim()) {
      setCurrentVideo({
        title: 'Video Personalizzato',
        url: customUrl.trim(),
        badge: 'URL Esterno',
      });
      setShowUrlInput(false);
      setIsPlaying(false);
    }
  };

  const triggerControlsHover = () => {
    setShowControls(true);
    if (hideControlsTimerRef.current) {
      window.clearTimeout(hideControlsTimerRef.current);
    }
    if (isPlaying) {
      hideControlsTimerRef.current = window.setTimeout(() => {
        setShowControls(false);
      }, 3500);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {/* Video Source Picker bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-white border-2 border-black shadow-[3px_3px_0px_#000]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono font-black uppercase text-black flex items-center gap-1">
            <Film className="w-3.5 h-3.5 text-blue-600" />
            <span>Sorgente Video:</span>
          </span>

          {PRESET_VIDEOS.map((vid, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentVideo(vid);
                setIsPlaying(false);
              }}
              className={`px-2.5 py-1 text-xs font-mono font-bold uppercase transition-all border border-black ${
                currentVideo.url === vid.url
                  ? 'bg-[#ffeb3b] text-black shadow-[2px_2px_0px_#000]'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-800'
              }`}
            >
              Demo {idx + 1}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Load from custom URL */}
          <button
            onClick={() => setShowUrlInput(!showUrlInput)}
            className="px-2.5 py-1 bg-white hover:bg-black hover:text-white text-black text-xs font-mono font-bold uppercase border border-black shadow-[2px_2px_0px_#000] flex items-center gap-1 transition-all"
          >
            <LinkIcon className="w-3 h-3" />
            <span>URL Video</span>
          </button>

          {/* Upload file */}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-2.5 py-1 bg-[#4ecdc4] hover:bg-black hover:text-[#4ecdc4] text-black text-xs font-mono font-black uppercase border border-black shadow-[2px_2px_0px_#000] flex items-center gap-1 transition-all"
            title="Carica un video MP4/WebM dal tuo dispositivo"
          >
            <Upload className="w-3 h-3 stroke-[2.5]" />
            <span>Carica File</span>
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept="video/mp4,video/webm,video/ogg,video/quicktime"
            className="hidden"
          />
        </div>
      </div>

      {/* URL Input collapse */}
      {showUrlInput && (
        <form
          onSubmit={handleLoadCustomUrl}
          className="p-3 bg-[#ffeb3b] border-2 border-black shadow-[3px_3px_0px_#000] flex flex-col sm:flex-row items-center gap-2"
        >
          <span className="text-xs font-mono font-black uppercase whitespace-nowrap text-black">
            Inserisci URL (.mp4 / .webm):
          </span>
          <input
            type="url"
            value={customUrl}
            onChange={(e) => setCustomUrl(e.target.value)}
            placeholder="https://example.com/mio-video.mp4"
            className="flex-1 bg-white border border-black px-3 py-1.5 text-xs font-mono text-black focus:outline-none"
          />
          <button
            type="submit"
            className="px-3 py-1.5 bg-black text-white font-mono font-bold text-xs uppercase hover:bg-white hover:text-black border border-black transition-colors"
          >
            Carica Video
          </button>
        </form>
      )}

      {/* Video Player Container */}
      <div
        ref={containerRef}
        onMouseMove={triggerControlsHover}
        onMouseEnter={() => setShowControls(true)}
        className="relative bg-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none overflow-hidden group select-none"
      >
        {/* Real HTML5 Video element */}
        <video
          ref={videoRef}
          src={currentVideo.url}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onWaiting={() => setIsLoading(true)}
          onPlaying={() => {
            setIsLoading(false);
            setIsPlaying(true);
          }}
          onPause={() => setIsPlaying(false)}
          onEnded={() => {
            setIsPlaying(false);
            if (isLooping && videoRef.current) {
              videoRef.current.play();
            }
          }}
          loop={isLooping}
          onClick={togglePlay}
          className="w-full aspect-video object-contain bg-black cursor-pointer"
        />

        {/* Top Info Bar Overlay (visible on hover) */}
        <div
          className={`absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent transition-opacity duration-200 flex items-center justify-between text-white ${
            showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-[#ffeb3b] text-black font-mono font-black text-[10px] uppercase border border-black">
              {currentVideo.badge}
            </span>
            <span className="font-bold text-xs font-mono text-white drop-shadow truncate max-w-xs sm:max-w-md">
              {currentVideo.title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono px-2 py-0.5 bg-white/20 backdrop-blur-sm border border-white/30 text-white uppercase">
              HTML5 Player
            </span>
          </div>
        </div>

        {/* Big Center Play/Pause button on screen */}
        {(!isPlaying || isLoading) && (
          <div
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] cursor-pointer"
          >
            {isLoading ? (
              <div className="w-16 h-16 bg-white border-4 border-black rounded-full flex items-center justify-center animate-spin shadow-[4px_4px_0px_#000]">
                <div className="w-6 h-6 border-4 border-black border-t-transparent rounded-full" />
              </div>
            ) : (
              <button
                className="w-20 h-20 bg-[#ffeb3b] border-4 border-black rounded-full flex items-center justify-center shadow-[6px_6px_0px_#000] hover:scale-105 active:scale-95 transition-transform"
                title="Riproduci Video"
              >
                <Play className="w-8 h-8 text-black fill-black ml-1.5" />
              </button>
            )}
          </div>
        )}

        {/* Bottom Custom Control Bar */}
        <div
          className={`absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/90 to-transparent p-3 sm:p-4 pt-6 transition-opacity duration-200 ${
            showControls || !isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Progress Timeline Scrubber */}
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs font-bold text-white min-w-[42px]">
              {formatTime(currentTime)}
            </span>

            <div className="relative flex-1 flex items-center group/scrubber">
              <input
                type="range"
                min={0}
                max={duration || 100}
                step={0.1}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-2.5 bg-stone-700 rounded-none appearance-none cursor-pointer accent-[#ffeb3b] focus:outline-none"
                style={{
                  background: `linear-gradient(to right, #ffeb3b ${(currentTime / (duration || 1)) * 100}%, #44403c ${(currentTime / (duration || 1)) * 100}%)`,
                }}
              />
            </div>

            <span className="font-mono text-xs font-bold text-stone-300 min-w-[42px] text-right">
              {formatTime(duration)}
            </span>
          </div>

          {/* Lower Controls Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-white">
            {/* Left Controls: Play, Skip, Volume */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={togglePlay}
                className="w-9 h-9 bg-white text-black border-2 border-black flex items-center justify-center hover:bg-[#ffeb3b] transition-colors shadow-[2px_2px_0px_#fff]"
                title={isPlaying ? 'Pausa' : 'Riproduci'}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 fill-current" />
                ) : (
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                )}
              </button>

              <button
                onClick={() => handleSkip(-10)}
                className="p-1.5 text-stone-300 hover:text-white hover:bg-white/10 rounded transition-colors text-xs font-mono font-bold"
                title="Indietro 10 secondi"
              >
                -10s
              </button>

              <button
                onClick={() => handleSkip(10)}
                className="p-1.5 text-stone-300 hover:text-white hover:bg-white/10 rounded transition-colors text-xs font-mono font-bold"
                title="Avanti 10 secondi"
              >
                +10s
              </button>

              {/* Volume control */}
              <div className="flex items-center gap-1.5 ml-1">
                <button
                  onClick={toggleMute}
                  className="p-1.5 text-stone-300 hover:text-white transition-colors"
                  title={isMuted ? 'Riattiva Audio' : 'Disattiva Audio'}
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="w-4 h-4 text-red-400" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-white" />
                  )}
                </button>

                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-16 sm:w-20 h-1.5 bg-stone-700 appearance-none cursor-pointer accent-[#ffeb3b]"
                />
              </div>
            </div>

            {/* Right Controls: Speed, Loop, PiP, Fullscreen */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Playback speed selector */}
              <div className="flex items-center bg-stone-900 border border-stone-700 p-0.5">
                {[0.75, 1, 1.5, 2].map((rate) => (
                  <button
                    key={rate}
                    onClick={() => setPlaybackRate(rate)}
                    className={`px-1.5 py-0.5 text-[10px] font-mono font-bold transition-colors ${
                      playbackRate === rate
                        ? 'bg-[#ffeb3b] text-black'
                        : 'text-stone-400 hover:text-white'
                    }`}
                  >
                    {rate}x
                  </button>
                ))}
              </div>

              {/* Loop toggle */}
              <button
                onClick={() => setIsLooping(!isLooping)}
                className={`p-1.5 border transition-colors ${
                  isLooping
                    ? 'bg-[#ffeb3b] text-black border-[#ffeb3b]'
                    : 'text-stone-300 border-stone-700 hover:text-white'
                }`}
                title="Ripeti in loop"
              >
                <Repeat className="w-3.5 h-3.5" />
              </button>

              {/* Picture-in-Picture */}
              <button
                onClick={togglePiP}
                className="p-1.5 text-stone-300 hover:text-white border border-stone-700 hover:bg-stone-800 transition-colors hidden sm:inline-flex"
                title="Picture in Picture"
              >
                <PictureInPicture2 className="w-3.5 h-3.5" />
              </button>

              {/* Fullscreen toggle */}
              <button
                onClick={toggleFullscreen}
                className="p-1.5 text-stone-300 hover:text-white border border-stone-700 hover:bg-stone-800 transition-colors"
                title="Schermo Intero"
              >
                {isFullscreen ? (
                  <Minimize className="w-3.5 h-3.5" />
                ) : (
                  <Maximize className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
