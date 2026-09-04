import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Repeat,
  Shuffle,
  Upload,
  Link as LinkIcon,
  Disc3,
  ListMusic,
  Radio,
  Sparkles,
  Music,
} from 'lucide-react';

interface AudioTrack {
  id: string;
  title: string;
  artist: string;
  duration: string;
  url: string;
  genre: string;
  coverColor: string;
}

const PRESET_TRACKS: AudioTrack[] = [
  {
    id: 'track-1',
    title: 'SoundHelix Ambient Wave #1',
    artist: 'Synthesized Harmony',
    duration: '06:12',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    genre: 'Ambient Chill',
    coverColor: '#ffeb3b',
  },
  {
    id: 'track-2',
    title: 'SoundHelix Electronic Echo #2',
    artist: 'Digital Resonance',
    duration: '07:05',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    genre: 'Synthwave',
    coverColor: '#4ecdc4',
  },
  {
    id: 'track-3',
    title: 'SoundHelix Melodic Pulse #3',
    artist: 'Acoustic Future',
    duration: '05:44',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    genre: 'Electro Pop',
    coverColor: '#ff6b6b',
  },
];

export default function InteractiveAudioPlayer() {
  const [playlist, setPlaylist] = useState<AudioTrack[]>(PRESET_TRACKS);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [customUrl, setCustomUrl] = useState('');
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [analyserBars, setAnalyserBars] = useState<number[]>([40, 65, 85, 50, 95, 70, 30, 90, 60, 80, 45, 75]);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const currentTrack = playlist[currentTrackIndex] || playlist[0];

  // Sync volume and mute
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);

  // Sync playback rate
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  // Equalizer visualizer animation loop
  useEffect(() => {
    let animId: number;
    if (isPlaying) {
      const updateBars = () => {
        setAnalyserBars((prev) =>
          prev.map(() => Math.floor(Math.random() * 75) + 25)
        );
        animId = window.setTimeout(updateBars, 120);
      };
      animId = window.setTimeout(updateBars, 120);
    } else {
      setAnalyserBars([20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
    }
    return () => window.clearTimeout(animId);
  }, [isPlaying]);

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '00:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const playTrackByIndex = (idx: number) => {
    setCurrentTrackIndex(idx);
    setIsPlaying(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    }, 150);
  };

  const handleNext = () => {
    if (isShuffle) {
      const randomIdx = Math.floor(Math.random() * playlist.length);
      playTrackByIndex(randomIdx);
    } else {
      const nextIdx = (currentTrackIndex + 1) % playlist.length;
      playTrackByIndex(nextIdx);
    }
  };

  const handlePrev = () => {
    const prevIdx = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    playTrackByIndex(prevIdx);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setCurrentTime(val);
    if (audioRef.current) {
      audioRef.current.currentTime = val;
    }
  };

  const handleSkip = (seconds: number) => {
    if (audioRef.current) {
      const targetTime = Math.min(Math.max(0, audioRef.current.currentTime + seconds), duration);
      audioRef.current.currentTime = targetTime;
      setCurrentTime(targetTime);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      const newTrack: AudioTrack = {
        id: `local-${Date.now()}`,
        title: file.name.replace(/\.[^/.]+$/, ''),
        artist: 'File Locale Utente',
        duration: '--:--',
        url: fileUrl,
        genre: 'Locale Audio',
        coverColor: '#a78bfa',
      };
      setPlaylist([newTrack, ...playlist]);
      setCurrentTrackIndex(0);
      setIsPlaying(false);
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
        }
      }, 150);
    }
  };

  const handleCustomUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customUrl.trim()) {
      const newTrack: AudioTrack = {
        id: `url-${Date.now()}`,
        title: 'Streaming Audio URL',
        artist: 'Web Stream',
        duration: '--:--',
        url: customUrl.trim(),
        genre: 'Web Stream',
        coverColor: '#f472b6',
      };
      setPlaylist([newTrack, ...playlist]);
      setCurrentTrackIndex(0);
      setShowUrlInput(false);
      setCustomUrl('');
      setIsPlaying(false);
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
        }
      }, 150);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      {/* Hidden HTML5 Audio Element */}
      <audio
        ref={audioRef}
        src={currentTrack.url}
        onTimeUpdate={() => {
          if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
        }}
        onLoadedMetadata={() => {
          if (audioRef.current) setDuration(audioRef.current.duration);
        }}
        onEnded={() => {
          if (isLooping) {
            if (audioRef.current) {
              audioRef.current.currentTime = 0;
              audioRef.current.play();
            }
          } else {
            handleNext();
          }
        }}
      />

      {/* Top Source Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-white border-2 border-black shadow-[3px_3px_0px_#000]">
        <div className="flex items-center gap-2">
          <Radio className="w-4 h-4 text-black animate-pulse" />
          <span className="text-xs font-mono font-black uppercase text-black">
            AUDIO PLAYER • {playlist.length} TRACCE
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Custom URL */}
          <button
            onClick={() => setShowUrlInput(!showUrlInput)}
            className="px-2.5 py-1 bg-white hover:bg-black hover:text-white text-black text-xs font-mono font-bold uppercase border border-black shadow-[2px_2px_0px_#000] flex items-center gap-1 transition-all"
          >
            <LinkIcon className="w-3 h-3" />
            <span>URL MP3</span>
          </button>

          {/* Upload file */}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-2.5 py-1 bg-[#ffeb3b] hover:bg-black hover:text-[#ffeb3b] text-black text-xs font-mono font-black uppercase border border-black shadow-[2px_2px_0px_#000] flex items-center gap-1 transition-all"
            title="Carica un file audio dal computer"
          >
            <Upload className="w-3 h-3 stroke-[2.5]" />
            <span>Carica Audio</span>
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept="audio/mp3,audio/wav,audio/ogg,audio/aac,audio/m4a,audio/*"
            className="hidden"
          />

          {/* Toggle playlist */}
          <button
            onClick={() => setShowPlaylist(!showPlaylist)}
            className={`px-2.5 py-1 text-xs font-mono font-bold uppercase border border-black shadow-[2px_2px_0px_#000] flex items-center gap-1 transition-all ${
              showPlaylist ? 'bg-black text-[#ffeb3b]' : 'bg-white hover:bg-stone-100 text-black'
            }`}
          >
            <ListMusic className="w-3.5 h-3.5" />
            <span>Playlist</span>
          </button>
        </div>
      </div>

      {/* URL Input Form */}
      {showUrlInput && (
        <form
          onSubmit={handleCustomUrlSubmit}
          className="p-3 bg-[#4ecdc4] border-2 border-black shadow-[3px_3px_0px_#000] flex flex-col sm:flex-row items-center gap-2"
        >
          <span className="text-xs font-mono font-black uppercase text-black whitespace-nowrap">
            URL Audio (.mp3):
          </span>
          <input
            type="url"
            value={customUrl}
            onChange={(e) => setCustomUrl(e.target.value)}
            placeholder="https://example.com/brano.mp3"
            className="flex-1 bg-white border border-black px-3 py-1.5 text-xs font-mono text-black focus:outline-none"
          />
          <button
            type="submit"
            className="px-3 py-1.5 bg-black text-white font-mono font-bold text-xs uppercase hover:bg-white hover:text-black border border-black transition-colors"
          >
            Carica e Riproduci
          </button>
        </form>
      )}

      {/* Main Neo-brutalist Boombox & Vinyl Console */}
      <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 space-y-6">
        {/* Upper section: Vinyl Disk & Track Details */}
        <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b-2 border-black">
          {/* Animated Vinyl Turntable Graphic */}
          <div className="relative shrink-0">
            <div
              className={`w-32 h-32 rounded-full bg-[#121212] border-4 border-black shadow-[4px_4px_0px_#000] flex items-center justify-center relative overflow-hidden ${
                isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''
              }`}
            >
              {/* Vinyl grooves */}
              <div className="absolute inset-2 rounded-full border border-stone-800" />
              <div className="absolute inset-4 rounded-full border border-stone-800" />
              <div className="absolute inset-6 rounded-full border border-stone-800" />

              {/* Center Record Label */}
              <div
                className="w-14 h-14 rounded-full border-2 border-black flex flex-col items-center justify-center text-center shadow-inner"
                style={{ backgroundColor: currentTrack.coverColor }}
              >
                <Disc3 className="w-5 h-5 text-black stroke-[2.5]" />
                <span className="text-[7px] font-mono font-black uppercase text-black tracking-tighter">
                  33 RPM
                </span>
              </div>

              {/* Spindle hole */}
              <div className="absolute w-3 h-3 bg-white rounded-full border-2 border-black" />
            </div>

            {/* Tonearm head indicator */}
            <div
              className={`absolute -top-1 -right-2 w-3 h-8 bg-black border border-white transition-transform origin-top ${
                isPlaying ? 'rotate-12' : '-rotate-12'
              }`}
            />
          </div>

          {/* Track Details & Visualizer Bars */}
          <div className="flex-1 text-center sm:text-left space-y-2 w-full">
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 bg-black text-[#ffeb3b] font-mono font-black text-[10px] uppercase border border-black">
                {currentTrack.genre}
              </span>
              <span className="text-[10px] font-mono text-stone-500 font-bold uppercase">
                {isPlaying ? 'IN RIPRODUZIONE' : 'IN PAUSA'}
              </span>
            </div>

            <h3 className="text-xl font-black text-black uppercase tracking-tight truncate">
              {currentTrack.title}
            </h3>
            <p className="text-xs font-mono font-bold text-stone-600 uppercase">
              {currentTrack.artist}
            </p>

            {/* Equalizer frequency bars */}
            <div className="pt-2 flex items-end justify-center sm:justify-start gap-1.5 h-10">
              {analyserBars.map((height, i) => (
                <div
                  key={i}
                  className="w-2.5 bg-black border border-black transition-all duration-100"
                  style={{
                    height: `${height}%`,
                    backgroundColor: isPlaying
                      ? i % 3 === 0
                        ? '#ffeb3b'
                        : i % 2 === 0
                        ? '#4ecdc4'
                        : '#000000'
                      : '#e5e5e5',
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Scrubber */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs font-mono font-bold text-black">
            <span>{formatTime(currentTime)}</span>
            <span className="text-stone-500">{formatTime(duration)}</span>
          </div>
          <input
            type="range"
            min={0}
            max={duration || 100}
            step={0.1}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-3 bg-stone-200 border-2 border-black rounded-none appearance-none cursor-pointer accent-black focus:outline-none"
            style={{
              background: `linear-gradient(to right, #ffeb3b ${(currentTime / (duration || 1)) * 100}%, #e5e5e5 ${(currentTime / (duration || 1)) * 100}%)`,
            }}
          />
        </div>

        {/* Primary Controls Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          {/* Loop & Shuffle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsShuffle(!isShuffle)}
              className={`p-2 border-2 border-black transition-all ${
                isShuffle
                  ? 'bg-[#ffeb3b] shadow-[2px_2px_0px_#000]'
                  : 'bg-white hover:bg-stone-100'
              }`}
              title="Casuale"
            >
              <Shuffle className="w-4 h-4 text-black stroke-[2.5]" />
            </button>

            <button
              onClick={() => setIsLooping(!isLooping)}
              className={`p-2 border-2 border-black transition-all ${
                isLooping
                  ? 'bg-[#ffeb3b] shadow-[2px_2px_0px_#000]'
                  : 'bg-white hover:bg-stone-100'
              }`}
              title="Ripeti traccia"
            >
              <Repeat className="w-4 h-4 text-black stroke-[2.5]" />
            </button>
          </div>

          {/* Center Playback Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => handleSkip(-10)}
              className="px-2 py-1.5 bg-white hover:bg-stone-100 text-black border-2 border-black text-xs font-mono font-bold"
              title="-10 secondi"
            >
              -10s
            </button>

            <button
              onClick={handlePrev}
              className="p-2.5 bg-white hover:bg-stone-100 text-black border-2 border-black shadow-[2px_2px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
              title="Traccia precedente"
            >
              <SkipBack className="w-4 h-4 text-black fill-black" />
            </button>

            <button
              onClick={togglePlay}
              className="w-14 h-14 bg-[#ffeb3b] hover:bg-black hover:text-[#ffeb3b] text-black border-3 border-black shadow-[4px_4px_0px_#000] flex items-center justify-center active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
              title={isPlaying ? 'Pausa' : 'Riproduci'}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 fill-current stroke-[2.5]" />
              ) : (
                <Play className="w-6 h-6 fill-current ml-1 stroke-[2.5]" />
              )}
            </button>

            <button
              onClick={handleNext}
              className="p-2.5 bg-white hover:bg-stone-100 text-black border-2 border-black shadow-[2px_2px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
              title="Traccia successiva"
            >
              <SkipForward className="w-4 h-4 text-black fill-black" />
            </button>

            <button
              onClick={() => handleSkip(10)}
              className="px-2 py-1.5 bg-white hover:bg-stone-100 text-black border-2 border-black text-xs font-mono font-bold"
              title="+10 secondi"
            >
              +10s
            </button>
          </div>

          {/* Volume Control */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 bg-white hover:bg-stone-100 border-2 border-black"
              title={isMuted ? 'Riattiva Audio' : 'Muto'}
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-4 h-4 text-red-600 stroke-[2.5]" />
              ) : (
                <Volume2 className="w-4 h-4 text-black stroke-[2.5]" />
              )}
            </button>

            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={isMuted ? 0 : volume}
              onChange={(e) => {
                setVolume(parseFloat(e.target.value));
                if (isMuted) setIsMuted(false);
              }}
              className="w-16 sm:w-24 h-2 bg-stone-200 appearance-none cursor-pointer accent-black"
            />
          </div>
        </div>

        {/* Speed Bar */}
        <div className="flex items-center justify-between pt-4 border-t-2 border-black text-xs font-mono font-bold">
          <span className="text-black uppercase">Velocità di Riproduzione:</span>
          <div className="flex items-center gap-1">
            {[0.75, 1, 1.25, 1.5].map((rate) => (
              <button
                key={rate}
                onClick={() => setPlaybackRate(rate)}
                className={`px-2 py-1 border-2 border-black uppercase ${
                  playbackRate === rate
                    ? 'bg-black text-[#ffeb3b]'
                    : 'bg-white hover:bg-stone-100 text-black'
                }`}
              >
                {rate}x
              </button>
            ))}
          </div>
        </div>

        {/* Playlist Drawer */}
        {showPlaylist && (
          <div className="pt-4 border-t-2 border-black space-y-2">
            <div className="flex items-center justify-between pb-1">
              <span className="text-xs font-mono font-black uppercase text-black">
                Tracce in Coda ({playlist.length})
              </span>
            </div>

            <div className="space-y-1.5 max-h-48 overflow-y-auto">
              {playlist.map((track, idx) => (
                <div
                  key={track.id}
                  onClick={() => playTrackByIndex(idx)}
                  className={`flex items-center justify-between p-2.5 border-2 border-black cursor-pointer transition-all ${
                    currentTrackIndex === idx
                      ? 'bg-[#ffeb3b] shadow-[2px_2px_0px_#000]'
                      : 'bg-stone-50 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <span className="font-mono text-xs font-black min-w-[20px]">
                      {idx + 1}.
                    </span>
                    <span className="font-bold text-xs truncate text-black uppercase">
                      {track.title}
                    </span>
                    <span className="text-[10px] font-mono text-stone-500 uppercase hidden sm:inline">
                      • {track.artist}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] font-mono px-1.5 py-0.5 bg-black text-white font-bold uppercase">
                      {track.genre}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
