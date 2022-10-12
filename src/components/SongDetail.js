import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) return <div>Select Song </div>;
  return (
    <>
      <h1>Details for : </h1>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log("Song", state.selectedSong);
  return {
    song: state.selectedSong
  };
};

export default connect(mapStateToProps)(SongDetail);
