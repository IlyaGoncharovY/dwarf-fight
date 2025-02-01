import { createSlice } from '@reduxjs/toolkit';

interface AudioState {
    isPlaying: boolean;
}

const initialState: AudioState = {
  isPlaying: false,
};

const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    playAudio(state) {
      state.isPlaying = true;
    },
    pauseAudio(state) {
      state.isPlaying = false;
    },
    toggleAudio(state) {
      state.isPlaying = !state.isPlaying;
    },
  },
});

export const { playAudio, pauseAudio, toggleAudio } = audioSlice.actions;
export default audioSlice.reducer;
