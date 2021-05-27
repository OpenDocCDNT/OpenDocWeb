import './DashboardCreateCourse.css';
import React from "react";
import {useHistory} from "react-router-dom";
import ProgressBar from "../../../../ui/ProgressBar/ProgressBar";
import DashboardCreateCourseQuestions from "./CourseCreateQuestions/CourseCreateQuestions";
import CoursePreview from "../../../../ui/CoursePreview/CoursePreview";

function DashboardCreateCourse() {
  const history = useHistory();
  return <DashboardCreateCourseComp history={history}/>
}

class DashboardCreateCourseComp extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitStepTitle = this.handleSubmitStepTitle.bind(this);
    this.handleSubmitStepDesc = this.handleSubmitStepDesc.bind(this);
    this.handleSubmitStepDiff = this.handleSubmitStepDiff.bind(this);
    this.handleSubmitStepImg = this.handleSubmitStepImg.bind(this);
    this.handleUpdateStepTitle = this.handleUpdateStepTitle.bind(this);
    this.handleUpdateStepDesc = this.handleUpdateStepDesc.bind(this);
    this.handleUpdateStepDiff = this.handleUpdateStepDiff.bind(this);
    this.handleUpdateStepImg = this.handleUpdateStepImg.bind(this);
    this.state = {
      statusTitle: "neutral",
      statusDesc: "neutral",
      statusDiff: "neutral",
      statusImg: "neutral",
      valueInputTitle: "Fabriquez votre fauteuil de jardin en palettes",
      valueInputDesc: "Tutoriel de construction d'un fauteuil de jardin avec des palettes en bois",
      inputIsValid: false,
    }
  }

  handleSubmitStepTitle(inputValue) {
    if (this.state.inputIsValid) {
      this.setState({
        step: 2,
        questionText: this.steps[1].questionText,
        hintText: this.steps[1].hintText,
        hintType: this.steps[1].hintType,
        requestBody: {
          img: undefined,
          difficulty: undefined,
          description: undefined,
          title: inputValue
        }
      })
    }
  }

  handleUpdateStepTitle(inputValue) {
    console.log(inputValue.length)
    if (inputValue.length === 0) {
      this.setState({
        statusTitle: 'neutral',
        hintText: 'Veuillez saisir un titre de plus de 8 caractères',
        inputIsValid: false,
        valueInputTitle: "Fabriquez votre fauteuil de jardin en palettes"
      })
    } else if (inputValue.length < 8) {
      this.setState({
        statusTitle: 'error',
        hintText: 'Veuillez saisir un titre de plus de 8 caractères',
        inputIsValid: false,
        valueInputTitle: inputValue
      })
    } else if (/[^a-zA-Z0-9_;-]/.test("Text-NoSpeChars")) {
      this.setState({
        statusTitle: 'error',
        hintText: 'Veuillez saisir un titre sans caractères spéciaux',
        inputIsValid: false,
        valueInputTitle: inputValue
      })
    } else if (inputValue.length > 99) {
      this.setState({
        statusTitle: 'error',
        hintText: 'Votre titre est trop long !',
        inputIsValid: false,
        valueInputTitle: inputValue
      })
    } else {
      this.setState({
        statusTitle: 'success',
        hintText: 'Votre titre est valide !',
        inputIsValid: true,
        valueInputTitle: inputValue
      })
    }
  }



  handleSubmitStepDesc(inputValue) {
    console.log("Yeet2")
  }

  handleUpdateStepDesc(inputValue) {

    if (inputValue.length === 0) {
      this.setState({
        valueInputDesc: "Tutoriel de construction d'un fauteuil de jardin avec des palettes en bois",
        statusDesc: "neutral"
      })
    } else if (inputValue.length < 26) {
      this.setState({
        valueInputDesc: inputValue,
        statusDesc: "error"
      })
    } else if (inputValue.length < 130) {
      this.setState({
        valueInputDesc: inputValue,
        statusDesc: "success"
      })
    } else {

    }

  }

  handleSubmitStepDiff(inputValue) {
    console.log("Yeet2")
  }

  handleUpdateStepDiff(inputValue) {
    console.log("Yeet2")
  }

  handleSubmitStepImg(inputValue) {
    console.log("Yeet3")
  }

  handleUpdateStepImg(inputValue) {
    console.log("Yeet4")
  }


  handleInputChange(newInputValue) {
    this.steps[this.state.step-1].handleUpdateFunction(newInputValue);
    this.setState({
      newInputValue: newInputValue
    })
  }

  handleSubmit(inputValue) {
    this.steps[this.state.step-1].handleSubmitFunction(inputValue);

  }

  render() {
    return (
      <div className="dashboardCreateCourse-root">
        <div className="dashboardCreateCourse-centerFix">
          <div className="dashboardCreateCourse-mainTitle">Bienvenue sur la création de cours</div>
          <div className="dashboardCreateCourse-subTitle">C'est ici que tout commence, répondez à ce questionnaire pour débuter</div>
          <div className="dashboardCreateCourse-progressBar">
            <ProgressBar progressType="success" barSize={600} progressSize={100} text="Titre - 2"/>
          </div>
          <div className="dashboardCreateCourse-questions">
            <DashboardCreateCourseQuestions data={
              {
                onInputChangeTitle: this.handleUpdateStepTitle,
                onInputChangeDesc: this.handleUpdateStepDesc,
                onInputChangeDiff: this.handleUpdateStepDiff,
                onInputChangeImg: this.handleUpdateStepImg,
                statusTitle: this.state.statusTitle,
                statusDesc: this.state.statusDesc,
                statusDiff: this.state.statusDiff,
                statusImg: this.state.statusImg,
              }
            }/>
          </div>
          <div className="dashboardCreateCourse-preview">
            <CoursePreview courseImg="/src" courseTitle={this.state.valueInputTitle} courseText={this.state.valueInputDesc} courseDifficulty={3}/>
          </div>
        </div>
      </div>
    )
  }
}

export default DashboardCreateCourse;
