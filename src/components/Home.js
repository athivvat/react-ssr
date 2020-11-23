import React, { useState } from "react";
import { connect } from "react-redux";

const Home = ({ initialText, changeText }) => {
  return (
    <div>
      <h1>Hello to My Home</h1>
      <p>{initialText}</p>
      <button onClick={changeText}>change text!</button>
    </div>
  );
};

const mapStateToProps = ({ initialText }) => ({
  initialText,
});

const mapDispatchToProps = (dispatch) => ({
  changeText: () => dispatch({ type: "CHANGE_TEXT" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
