import {
  SkipPrevious,
  SkipNext,
  PlayCircleFilled,
  PauseCircleFilled,
} from '@mui/icons-material';
import React from 'react';

function MusicControls({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}: any) {
  return (
    <div className='audio-controls'>
      <button
        type='button'
        className='prev'
        aria-label='Previous'
        onClick={onPrevClick}
      >
        <SkipPrevious />
      </button>
      {isPlaying ? (
        <button
          type='button'
          className='pause'
          onClick={() => onPlayPauseClick(false)}
          aria-label='Pause'
        >
          <PauseCircleFilled />
        </button>
      ) : (
        <button
          type='button'
          className='play'
          onClick={() => onPlayPauseClick(true)}
          aria-label='Play'
        >
          <PlayCircleFilled />
        </button>
      )}
      <button
        type='button'
        className='next'
        aria-label='Next'
        onClick={onNextClick}
      >
        <SkipNext />
      </button>
    </div>
  );
}

export default MusicControls;
