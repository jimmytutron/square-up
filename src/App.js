import React, { Component } from 'react';
import Container from "./components/Container";
import Square from "./components/Square";
import friends from "./blackpink.json";
import "./App.css";

const shuffle = require("shuffle-array");


class App extends Component {

  state = {
    friends,
    score: 0,
    bestScore: 0,
    message: "",
    shook: ""
  };

  clickyClick = id => {

    let friend = this.state.friends.filter(friend => friend.id === id)[0];

    let score = this.state.score;
    let bestScore = this.state.bestScore;
    let message = this.state.message;
    let shook = this.state.shook;

    if(friend.clicked === false){
      friend.clicked = true;
      console.log(friend)


      score++;
      if(bestScore < score){
        bestScore = score;
      }
      message = "";
      shook = "";
      console.log(score)
      shuffle(friends)
      this.setState({score, bestScore, friends, message, shook});
    } else {
    this.finish();
    }

  };

  finish = () => {
    let message = this.state.message;
    let shook = this.state.shook;
    let bestScore = this.state.bestScore;
    let score = this.state.score;

    if (bestScore < score){
      bestScore = score;
      if (bestScore = 12){
        console.log("bitch u won!")
      }
    } 
    else {
    message = "Hitchu witdat DDU DU DDU DU";
    shook = "animated jello"
    }
    score = 0;
    this.state.friends.map((friend) => {
      return friend.clicked = false;
    });
    this.setState({score, bestScore, message, shook})
  }

  render() {
    return (
      <Container>
      <div className = {this.state.shook}>
      <div className="row justify-content-center">
      <div className ="col-12 col-md-10">
      <h1 className = "text-center font-weight-bold pink">BLΛƆKPIИK | SQUARE UP</h1>
      <h2 className = "text-center font-weight-bold">CURRENT SCORE: {this.state.score} | BEST SCORE: {this.state.bestScore}</h2>
      <h3 className = "text-center font-weight-bold pink big">{this.state.message}</h3>
      </div>
      </div>

      <div className="row justify-content-center no-gutters pink-box px-1 py-1">

      {this.state.friends.map( (friend, i) => (
      <Square
        clickyClick = {this.clickyClick}
        id = {friend.id}
        image = {friend.image}
        clicked = {friend.clicked}
        key = {i}
      />
      ))}

      </div>
      </div>

      </Container>
    );
  }
}

export default App;
