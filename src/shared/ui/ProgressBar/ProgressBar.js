import './ProgressBar.css';
import React from "react";



function ProgressBar(props) {
  return <ProgressBarComponent progressType={props.progressType} progressSize={props.progressSize} barSize={props.barSize} text={props.text}/>
}

class ProgressBarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.updateProgress = this.updateProgress.bind(this);
    this.state = {
      progressType: this.props.progressType,
      progressSize: this.props.progressSize,
      barSize: this.props.barSize,
      text: this.props.text
    }

    this.progressRootRef = React.createRef();
    this.progressBarRef = React.createRef();
  }

  updateProgress() {

    const cssClassNeutral= "backgroundNeutral";
    const cssClassImportant = "backgroundImportant";
    const cssClassError = "backgroundError";
    const cssClassSuccess = "backgroundSuccess";

    const barElement = this.progressRootRef.current;

    const progressElement = this.progressBarRef.current

    barElement.style.width = this.state.barSize + "px";

    switch (this.state.progressType) {
      case "neutral":
        progressElement.classList.add(cssClassNeutral);
        break;
      case "important":
        progressElement.classList.add(cssClassImportant);
        break;
      case "error":
        progressElement.classList.add(cssClassError);
        break;
      case "success":
        progressElement.classList.add(cssClassSuccess);
        break;
      default:
        progressElement.classList.add(cssClassNeutral);
        break;
    }

    progressElement.style.width = this.state.progressSize+"%";

  }

  componentDidMount() {

    this.updateProgress();

  }

  render() {

    return (
      <div ref={this.progressRootRef} className="progressBar-root">
        <div ref={this.progressBarRef}  className="progressBar-progress"><span>{this.state.text}</span></div>
      </div>
    )
  }
}

export default ProgressBar;
