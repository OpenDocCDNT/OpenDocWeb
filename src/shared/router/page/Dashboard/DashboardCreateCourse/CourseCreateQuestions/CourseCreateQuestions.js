import './CourseCreateQuestions.css';
import React from "react";
import HintBar from "../../../../../ui/HintBar/HintBar";
import DynamicInput from "../../../../../ui/Input/DynamicInput/DynamicInput";


function DashboardCreateCourseQuestions(props) {
  return <DashboardCreateCourseQuestionsComp hintText={props.hintText} hintType={props.hintType} questionText={props.questionText} questionStep={props.questionStep} onInputChange={props.onInputChange} onInputSubmit={props.onInputSubmit}/>
}

class DashboardCreateCourseQuestionsComp extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      step: this.props.questionStep,
      hintType: this.props.hintType,
      hintText: this.props.hintText,
      questionText: this.props.questionText
    }
  }
  static getDerivedStateFromProps(nextProps) {
    return {
      hintType: nextProps.hintType,
      hintText: nextProps.hintText,
    }
  }

  handleSubmit(inputValue) {
    this.props.onInputSubmit(inputValue)
  }

  handleInputChange(newInputValue) {
    this.props.onInputChange(newInputValue)
  }

  render() {
    return (
      <div className="dashboardCreateCourseQuestion-root">
        <div className="dashboardCreateCourseQuestion-stepAndHintContainer">
          <span className="dashboardCreateCourseQuestion-stepAndHintContainer-step">{"Step - " + this.state.step}</span>
          <HintBar hintType="neutral" hintText="Regardez l'aperçu en bas de votre écran pour vous aider" />
        </div>
        <div className="dashboardCreateCourseQuestion-question">
          <div className="dashboardCreateCourseQuestion-question-centerfix">{this.state.questionText}</div>
        </div>
        <div className="dashboardCreateCourseQuestion-answer">
          <HintBar hintType={this.state.hintType} hintText={this.state.hintText}/>
          <DynamicInput inputType={this.state.hintType} inputSize={310} onChange={this.handleInputChange} onSubmit={this.handleSubmit}/>
        </div>
      </div>
    )
  }
}

export default DashboardCreateCourseQuestions;
