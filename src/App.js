import React, { Component } from 'react';
import Container from "./components/Container";
import Square from "./components/Square";
import Blackpink from "./blackpink.json";
import YouTube from 'react-youtube';
import "./App.css";

const shuffle = require("shuffle-array");

class App extends Component {

  state = {
    Blackpink,
    score: 0,
    bestScore: 0,
    message: "",
    shook: ""
  };

  dduDuDduDu = id => {

    let member = this.state.Blackpink.filter(member => member.id === id)[0];

    let score = this.state.score;
    let bestScore = this.state.bestScore;
    let message = this.state.message;
    let shook = this.state.shook;

    if(member.clicked === false){
      member.clicked = true;
      console.log(member)


      score++;
      if(bestScore < score){
        bestScore = score;
      }
      message = "";
      shook = "";
      console.log(score)
      shuffle(Blackpink)
      this.setState({score, bestScore, Blackpink, message, shook});
    } else {
    this.seeULater();
    }

  };

  seeULater = () => {
    let message = this.state.message;
    let shook = this.state.shook;
    let bestScore = this.state.bestScore;
    let score = this.state.score;

    if (bestScore < score){
      bestScore = score;
      if (bestScore = 12){
        console.log("wow you won!")
      }
    } 
    else {
    message = "Hitchu witdat DDU DU DDU DU";
    shook = "animated jello"
    }
    score = 0;
    this.state.Blackpink.map((member) => {
      return member.clicked = false;
    });
    this.setState({score, bestScore, message, shook})
  }

   _onEnd(event) {
    event.target.playVideo();
  }

  render() {
      const videoOptions = {
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0
    }
  };

    return (
      <div>
       <div className="video-background">
        <div className="video-foreground">
          <YouTube
            videoId="IHNzOHi8sJs"
            opts={videoOptions}
            className="video-iframe"
            onReady={this._onReady}
            onEnd={this._onEnd}
          />
        </div>
      </div>

      <Container>
  

      <div className = {this.state.shook}>
          <div className="row justify-content-center">
              <div className ="col-12 col-md-10  pink-box">
                  <h1 className = "text-center font-weight-bold">BLΛƆKPIИK | SQUARE UP</h1>
                  <h2 className = "text-center font-weight-bold">
                  CURRENT SCORE: {this.state.score} | BEST SCORE: {this.state.bestScore}
                  </h2>
                  <h3 className = "text-center font-weight-bold big">{this.state.message}</h3>
              </div>
          </div>

          <div className="row justify-content-center no-gutters px-1 py-1">

              {this.state.Blackpink.map( (member, i) => (
              <Square
                hitEmWitDat = {this.dduDuDduDu}
                id = {member.id}
                image = {member.image}
                clicked = {member.clicked}
                key = {i}
              />
              ))}

          </div>
      </div>

      </Container>
      </div>
    );
  }
}

export default App;
