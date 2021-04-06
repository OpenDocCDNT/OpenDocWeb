import './CourseCreateQuestions.css';
import React from "react";
import HintBar from "../../../../../ui/HintBar/HintBar";
import DynamicInput from "../../../../../ui/Input/DynamicInput/DynamicInput";


function DashboardCreateCourseQuestions() {
  return <DashboardCreateCourseQuestionsComp/>
}

class DashboardCreateCourseQuestionsComp extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      step: 0,
      hintType: 'important',
      hintText: "Veuillez saisir un titre pour votre cours",
      inputPlaceholder: 'Fabriquez votre fauteuil de jardin en palettes'
    }
  }

  handleSubmit() {

  }

  handleInputChange() {

  }

  render() {
    return (
      <div className="dashboardCreateCourseQuestion-root">
        <div className="dashboardCreateCourseQuestion-stepAndHintContainer">
          <span className="dashboardCreateCourseQuestion-stepAndHintContainer-step">{"Step - " + this.state.step}</span>
          <HintBar hintType="neutral" text="Regardez l'aperçu en bas de votre écran pour vous aider" />
        </div>
        <div className="dashboardCreateCourseQuestion-question">
          <div className="dashboardCreateCourseQuestion-question-centerfix">{"This is a very good question !"}</div>
        </div>
        <div className="dashboardCreateCourseQuestion-answer">
          <HintBar hintType={this.state.hintType} text={this.state.hintText}/>
          <DynamicInput inputType={this.state.hintType} inputSize={310} inputPlaceholder={this.state.inputPlaceholder} onChange={this.handleInputChange} onSubmit={this.handleSubmit}/>
        </div>
      </div>
    )
  }
}

export default DashboardCreateCourseQuestions;
