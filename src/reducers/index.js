import { combineReducers } from "redux";
const songReducer = () => {
  return [
    {
      title: "abc",
      duration: "4.00"
    },
    {
      title: "new",
      duration: "3. We 59"
    },
    {
      title: "xyz",
      duration: "3.00"
    },
    {
      title: "alpha",
      duration: "2.10"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  switch (action.type) {
    case "SONG_SELECT":
      return action.payload;
    default:
      return selectedSong;
  }
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
});
