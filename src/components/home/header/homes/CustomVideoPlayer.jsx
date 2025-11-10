import React, { useEffect, useRef, useState } from 'react';
import './CustomVideoPlayer.css';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

const formatTime = (seconds) => {
  if (isNaN(seconds)) return '00:00:00';
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  seconds = Math.floor(seconds % 60);
  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const CustomVideoPlayer = ({ src, captionSrc }) => {
  const videoRef = useRef(null);
  const progressBarRef = useRef(null);
  const settingsRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isCaptionsOn, setIsCaptionsOn] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showSettings, setShowSettings] = useState(false);
  const [loading, setLoading] = useState(false);
  const [previewTime, setPreviewTime] = useState(null);
  const [previewPos, setPreviewPos] = useState(null);

  // Video setup
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = 1;
    video.muted = true;

    const onLoadedMetadata = () => {
      setDuration(video.duration);
      setIsPlaying(!video.paused);
      const track = video.textTracks[0];
      if (track) {
        track.mode = 'hidden';
        setIsCaptionsOn(false);
      }
    };

    const onTimeUpdate = () => {
      setCurrentTime(video.currentTime);
      if (progressBarRef.current) {
        const percent = (video.currentTime / video.duration) * 100;
        progressBarRef.current.style.width = `${percent}%`;
      }
    };

    const onWaiting = () => setLoading(true);
    const onPlaying = () => {
      setLoading(false);
      setIsPlaying(true);
    };
    const onPause = () => setIsPlaying(false);

    video.addEventListener('loadedmetadata', onLoadedMetadata);
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('waiting', onWaiting);
    video.addEventListener('playing', onPlaying);
    video.addEventListener('pause', onPause);

    return () => {
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('waiting', onWaiting);
      video.removeEventListener('playing', onPlaying);
      video.removeEventListener('pause', onPause);
    };
  }, [src, captionSrc]);

  // Fullscreen listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Click outside to close settings
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setShowSettings(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play().catch(console.error);
    else video.pause();
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
    setVolume(video.muted ? 0 : video.volume);
  };

  const handleVolumeChange = (e) => {
    const video = videoRef.current;
    if (!video) return;
    const vol = parseFloat(e.target.value);
    video.volume = vol;
    video.muted = vol === 0;
    setVolume(vol);
    setIsMuted(video.muted);
  };

  const handleProgressClick = (e) => {
    const video = videoRef.current;
    if (!video) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    video.currentTime = (clickX / rect.width) * video.duration;
  };

  const handleProgressMouseMove = (e) => {
    const video = videoRef.current;
    if (!video) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const hoverX = e.clientX - rect.left;
    const width = rect.width;
    const time = (hoverX / width) * video.duration;
    setPreviewTime(time);
    setPreviewPos((hoverX / width) * 100);
  };

  const toggleFullscreen = () => {
    const container = videoRef.current.parentElement;
    if (!document.fullscreenElement) container.requestFullscreen().catch(console.error);
    else document.exitFullscreen().catch(console.error);
  };

  const toggleCaptions = () => {
    const video = videoRef.current;
    if (!video) return;
    const track = video.textTracks[0];
    if (!track) return;
    track.mode = track.mode === 'showing' ? 'hidden' : 'showing';
    setIsCaptionsOn(track.mode === 'showing');
  };

  const changePlaybackRate = (rate) => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = rate;
    setPlaybackRate(rate);
    setShowSettings(false); // auto-close menu
  };

  const toggleSettings = (e) => {
    e.stopPropagation();
    setShowSettings((prev) => !prev);
  };

  return (
    <div className="video-player-container">
      <div className="video-container">
        <video
          ref={videoRef}
          className="video"
          controls={false}
          controlsList="nodownload"
          preload="metadata"
          playsInline
          autoPlay
          muted={isMuted}
          src={src}
          loop
          onClick={togglePlay}
        >
          {captionSrc && (
            <track src={captionSrc} kind="subtitles" srcLang="en" label="English" default />
          )}
          Your browser does not support the video tag.
        </video>

        {loading && <div className="loading-spinner"></div>}

        {/* Controls overlay */}
        <div className="controls">
          <div
            className="progress-container"
            onClick={handleProgressClick}
            onMouseMove={handleProgressMouseMove}
            onMouseLeave={() => {
              setPreviewTime(null);
              setPreviewPos(null);
            }}
          >
            <div className="progress-bar" ref={progressBarRef}>
              {previewTime !== null && (
                <div
                  className="progress-time"
                  style={{ left: `${previewPos}%`, transform: 'translateX(-50%)' }}
                >
                  {formatTime(previewTime)}
                </div>
              )}
            </div>
          </div>

          <div className="buttons-container">
            <div className="left-controls">
              <button className="control-btn play-btn" title="Play/Pause" onClick={togglePlay}>
                {isPlaying ? '❚❚' : '▶'}
              </button>
              <button className="control-btn mute-btn" title="Mute" onClick={toggleMute}>
                {isMuted ? '🔇' : '🔊'}
              </button>
              <div className="volume-container">
                <input
                  type="range"
                  className="volume-slider"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                />
              </div>
              <span className="time-display">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <div className="right-controls">
              <button
                className={`control-btn captions-btn ${isCaptionsOn ? 'active' : ''}`}
                title="Subtitles"
                onClick={toggleCaptions}
              >
                CC
              </button>

              <div className="settings-menu" ref={settingsRef}>
                <button
                  className={`control-btn settings-btn ${showSettings ? 'active' : ''}`}
                  title="Settings"
                  onClick={toggleSettings}
                >
                  ⚙️
                </button>

                {showSettings && (
                  <div className="settings-content">
                    {[0.5, 0.75, 1, 1.25, 1.5, 2].map((speed) => (
                      <div
                        key={speed}
                        className={`settings-item playback-speed ${
                          playbackRate === speed ? 'active' : ''
                        }`}
                        onClick={() => changePlaybackRate(speed)}
                      >
                        {speed === 1 ? 'Normal' : `${speed}x`}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                className="control-btn fullscreen-btn"
                title="Fullscreen"
                onClick={toggleFullscreen}
              >
                {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
