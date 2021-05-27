import './DynamicInput.css';
import React from "react";

function DynamicInput(props) {
  return <DynamicInputNeutral inputType={props.inputType} inputSize={props.inputSize} inputPlaceholder={props.inputPlaceholder} onChange={props.onChange} onSubmit={props.onSubmit}/>
}

class DynamicInputNeutral extends React.Component {
  constructor(props) {
    super(props);
    this.adaptStyle = this.adaptStyle.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.changeStyle = this.changeStyle.bind(this);
    this.state = {
      inputType: this.props.inputType,
      inputSize: this.props.inputSize,
      inputPlaceholder: this.props.inputPlaceholder,
    }
    this.rootEl = React.createRef();
    this.inputEl = React.createRef();
    this.colors = {
      neutral: "#BBDFF2",
      important: "#E1B12C",
      error: "#bf4d0f",
      success: "#4cd137"
    }
  }

  adaptStyle() {
    const rootEl = this.rootEl.current;
    const inputEl = this.inputEl.current;

    rootEl.style.width = this.state.inputSize + "px"

    switch (this.state.inputType) {
      case "neutral":
        inputEl.style.borderColor = this.colors.neutral;
        break;
      case "important":
        inputEl.style.borderColor = this.colors.important;
        break;
      case "error":
        inputEl.style.borderColor = this.colors.error;
        break;
      case "success":
        inputEl.style.borderColor = this.colors.success;
        break;
      default:
        inputEl.style.borderColor = this.colors.neutral;
        break;
    }
  }

  changeStyle(status) {
    const inputEl = this.inputEl.current;

    switch (status) {
      case "neutral":
        inputEl.style.borderColor = this.colors.neutral;
        break;
      case "important":
        inputEl.style.borderColor = this.colors.important;
        break;
      case "error":
        inputEl.style.borderColor = this.colors.error;
        break;
      case "success":
        inputEl.style.borderColor = this.colors.success;
        break;
      default:
        inputEl.style.borderColor = this.colors.neutral;
        break;
    }
  }

  static getDerivedStateFromProps(props) {

    return {
      inputType: props.inputType
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    this.changeStyle(this.state.inputType)
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  componentDidMount() {
    this.adaptStyle();
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(event.target[0].value)
  }

  handleInputChange(event) {
    this.props.onChange(event.target.value)
  }

  render() {

    let displaySubmit = true;
    if (this.props.onSubmit === undefined) {
      displaySubmit = false;
    }

    return (
      <div ref={this.rootEl} className="dynamicInput-root">
        <form onSubmit={event => {this.handleFormSubmit(event)}}>
          <input onChange={event => this.handleInputChange(event)} ref={this.inputEl} className={
              displaySubmit ? "dynamicInput-input dynamicInput-inputRegularWidth" : "dynamicInput-input dynamicInput-inputFullWidth"
          } type="text"/>
          {
            displaySubmit ? <input type="submit" className="dynamicInput-buttonSubmit" value={"OK"}/> : ""
          }
        </form>
      </div>

    )
  }
}

export default DynamicInput;
