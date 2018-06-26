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
    playAgain: "",
    shook: "",
    videoOptions: {}
  };

  dduDuDduDu = id => {


    let videoOptions = {
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
    }
  };

    let member = this.state.Blackpink.filter(member => member.id === id)[0];

    let score = this.state.score;
    let bestScore = this.state.bestScore;
    let message = this.state.message;
    let shook = this.state.shook;
    let playAgain = this.state.playAgain;

    if(member.clicked === false){
      member.clicked = true;
      console.log(member)


      score++;
      if(bestScore < score){
        bestScore = score;
      }
      message = "";
      shook = "";
      playAgain = "",
      console.log(score)
      shuffle(Blackpink)
      this.setState({score, bestScore, Blackpink, message, playAgain, shook, videoOptions});
    } else {
    this.seeULater();
    }

  };

  seeULater = () => {
    let message = this.state.message;
    let playAgain = this.state.playAgain;
    let shook = this.state.shook;
    let bestScore = this.state.bestScore;
    let score = this.state.score;

    if (bestScore < score){
      bestScore = score;
    } 
    else if (score === 12){

        console.log("wow you won!")
        message = "뜨거워, 뜨거워, 뜨거워 like fire!";
        playAgain="When the bass drops it's another banger. You Won! Click any picture to play again"
    }
    else {
    message = "Hitchu witdat DDU DU DDU DU";
    playAgain ="click any picture to play again!"
    shook = "animated jello"
    }
    score = 0;
    this.state.Blackpink.map((member) => {
      return member.clicked = false;
    });
    this.setState({score, bestScore, message, playAgain, shook})
  }


   _onEnd(event) {
    event.target.playVideo();
  }

  render() {

    return (
      <div>
      <div className="video-background">
      <div className="video-foreground">
          <YouTube
            videoId="IHNzOHi8sJs"
            opts={this.state.videoOptions}
            className="video-iframe"
            onReady={this._onReady}
            onEnd={this._onEnd}
          />
        </div>
      </div>

                <div className="row justify-content-center pink-box">
              <div className ="col-12 col-md-10">
                  <h1 className = "text-center font-weight-bold">BLΛƆKPIИK | SQUARE UP</h1>
                  <h2 className = "text-center font-weight-bold">
                  CURRENT SCORE: {this.state.score} | BEST SCORE: {this.state.bestScore}
                  </h2>
                  <h3 className = "text-center font-weight-bold big">{this.state.message}</h3>
                  <h4 className = "text-center font-weight-bold font-style-italics">{this.state.playAgain}</h4>
              </div>
          </div>

      <Container>
  

      <div className = {this.state.shook}>


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
