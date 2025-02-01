const audio = new Audio('/audio/background-music.mp3');
audio.loop = true;

export const AudioManager = {
  play: () => audio.play(),
  pause: () => audio.pause(),
  toggle: () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  },
};
