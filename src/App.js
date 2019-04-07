import React, { Component } from "react";
import Rhythm from "./components/Rhythm/Rhythm";
import NumBeats from "./components/Time-Sig/NumBeats";
import BeatType from "./components/Time-Sig/BeatType";

class App extends Component {
  // Setting initial state
  state = {
    rhythm: "Quarter Note",
    rhythmoptions: ["Quarter Note", "Eighth Notes", "Sixteenth Notes"],
    tstop: 4,
    tsbottom: 4,
    tstopoptions: [],
    tsbottomoptions: [2, 4, 8, 16],
    tsdisplay: [],
    anchorEl: null,
    anchore2: null,
    anchore3: null
  };

  componentDidMount() {
    let { tstop, tsbottom, tstopoptions } = this.state;
    let numBeats = [];
    let beatType = "";

    // Set top number of time signature
    for (let i = 0; i < tstop; i++) {
      let j = i + 1;
      numBeats.push(j);
    }
    // Set selections for top number of time signature
    for (let i = 0; i < 30; i++) {
      let j = i + 1;
      tstopoptions.push(j);
    }
    // Set bottom number of time signature
    switch (tsbottom) {
      case 2:
        beatType = "Half Note";
        break;
      case 4:
        beatType = "Quarter Note";
        break;
      case 8:
        beatType = "Eighth Note";
        break;
      case 16:
        beatType = "Sixteenth Note";
        break;
      default:
        return null;
    }

    // Update state to display time signature and rhythm
    this.setState({
      tsdisplay: numBeats,
      rhythm: beatType
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tstop, tsbottom } = this.state;
    let beatType;
    let numBeats = [];

    // If the top number of the time signature changes
    if (tstop !== prevState.tstop) {
      // Set top number of time signature
      for (let i = 0; i < tstop; i++) {
        let j = i + 1;
        numBeats.push(j);
      }
      // Update state and display
      this.setState({
        tsdisplay: numBeats
      });
    }

    // If the bottom number of the time signature changes
    if (tsbottom !== prevState.tsbottom) {
      // Set the beat type
      switch (tsbottom) {
        case "2":
          beatType = "Half Note";
          break;
        case "4":
          beatType = "Quarter Note";
          break;
        case "8":
          beatType = "Eighth Note";
          break;
        case "16":
          beatType = "Sixteenth Note";
          break;
      }
      // Update state
      this.setState({
        rhythm: beatType
      });
    }
  }

  handleNumClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleNumClose = event => {
    this.setState({ anchorEl: null, tstop: event.target.innerText });
  };
  handleTypeClick = event => {
    this.setState({ anchore2: event.currentTarget });
  };
  handleTypeClose = event => {
    this.setState({ anchore2: null, tsbottom: event.target.innerText });
  };
  handleRhythmClick = event => {
    this.setState({ anchore3: event.currentTarget });
  };
  handleRhythmClose = event => {
    this.setState({ anchore3: null, rhythm: event.target.innerText });
  };

  render() {
    const {
      rhythm,
      tstop,
      tsbottom,
      tsdisplay,
      anchorEl,
      anchore2,
      anchore3,
      tsbottomoptions,
      tstopoptions,
      rhythmoptions
    } = this.state;

    return (
      <div className="App">
        <NumBeats
          num={tstop}
          anchorEl={anchorEl}
          options={tstopoptions}
          handleClick={this.handleNumClick}
          handleClose={this.handleNumClose}
        />
        <BeatType
          type={tsbottom}
          anchore2={anchore2}
          options={tsbottomoptions}
          handleClick={this.handleTypeClick}
          handleClose={this.handleTypeClose}
        />
        {tsdisplay.map((num, i) => {
          return (
            <Rhythm
              rhythm={rhythm}
              key={i}
              anchore3={anchore3}
              options={rhythmoptions}
              handleClick={this.handleRhythmClick}
              handleClose={this.handleRhythmClose}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
