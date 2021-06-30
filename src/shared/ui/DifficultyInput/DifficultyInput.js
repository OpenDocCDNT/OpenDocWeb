import './DifficultyInput.css';
import React from "react";

function DifficultyInput(props) {
  return <DifficultyInputComp yeet={props.yeet} handleChangeDiff={props.handleChangeDiff}/>
}

class DifficultyInputComp extends React.Component {
  constructor(props) {
    super(props);
    this.setStyles = this.setStyles.bind(this)
    this.setDiff = this.setDiff.bind(this)
    this.setStylesParam = this.setStylesParam.bind(this)
    this.state = {
      difficulty: 1
    }
    this.bubbles = [React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef()]
  }

  setStyles() {
    for (let i=0;i<this.state.difficulty;i++) {
      this.bubbles[i].current.classList.add("difficultyInput-bgGreen")
    }
  }

  setStylesParam(diff) {
    for (let i=0;i<this.bubbles.length;i++) {
      this.bubbles[i].current.classList.remove("difficultyInput-bgGreen")
    }
    for (let i=0;i<diff;i++) {
      this.bubbles[i].current.classList.add("difficultyInput-bgGreen")
    }
  }

  setDiff(diff) {
    this.props.handleChangeDiff(diff);
    this.setStylesParam(diff)
    this.setState({
      difficulty: diff
    })

  }

  componentDidMount() {
    this.setStyles();
  }

  render() {

    return (
      <div className="difficultyInput-root">
        <div className="difficultyInput-bubbles">
          <div onMouseEnter={() => {this.setDiff(1)}} ref={this.bubbles[0]} className="difficultyInput-bubble"/>
          <div onMouseEnter={() => {this.setDiff(2)}} ref={this.bubbles[1]} className="difficultyInput-bubble"/>
          <div onMouseEnter={() => {this.setDiff(3)}} ref={this.bubbles[2]} className="difficultyInput-bubble"/>
          <div onMouseEnter={() => {this.setDiff(4)}} ref={this.bubbles[3]} className="difficultyInput-bubble"/>
          <div onMouseEnter={() => {this.setDiff(5)}} ref={this.bubbles[4]} className="difficultyInput-bubble"/>
        </div>
      </div>
    )
  }
}

export default DifficultyInput;
