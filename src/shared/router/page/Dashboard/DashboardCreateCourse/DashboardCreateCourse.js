import "./DashboardCreateCourse.css";
import React from "react";
import { useHistory } from "react-router-dom";
import DashboardCreateCourseQuestions from "./CourseCreateQuestions/CourseCreateQuestions";
import CoursePreview from "../../../../ui/CoursePreview/CoursePreview";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchCreatorPost } from "../../../../utils/fetchCreator";

function DashboardCreateCourse() {
  const history = useHistory();
  return <DashboardCreateCourseComp history={history} />;
}

class DashboardCreateCourseComp extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdateStepTitle = this.handleUpdateStepTitle.bind(this);
    this.handleUpdateStepDesc = this.handleUpdateStepDesc.bind(this);
    this.handleUpdateStepDiff = this.handleUpdateStepDiff.bind(this);
    this.handleUpdateStepImg = this.handleUpdateStepImg.bind(this);
    this.checkTitle = this.checkTitle.bind(this);
    this.checkDesc = this.checkDesc.bind(this);
    this.state = {
      statusTitle: "neutral",
      statusDesc: "neutral",
      statusDiff: "neutral",
      statusImg: "neutral",
      valueInputTitle: "Fabriquez votre fauteuil de jardin en palettes",
      valueInputDesc:
        "Tutoriel de construction d'un fauteuil de jardin avec des palettes en bois",
      defaultValueInputTitle: "Fabriquez votre fauteuil de jardin en palettes",
      defaultValueInputDesc:
        "Tutoriel de construction d'un fauteuil de jardin avec des palettes en bois",
      valueInputDiff: 1,
      valueInputImg: "null",
      inputIsValid: false,
    };
  }

  handleUpdateStepTitle(inputValue) {
    if (inputValue.length === 0) {
      this.setState({
        statusTitle: "neutral",
        hintText: "Veuillez saisir un titre de plus de 8 caractères",
        inputIsValid: false,
        valueInputTitle: "Fabriquez votre fauteuil de jardin en palettes",
      });
    } else if (inputValue.length < 8) {
      this.setState({
        statusTitle: "error",
        hintText: "Veuillez saisir un titre de plus de 8 caractères",
        inputIsValid: false,
        valueInputTitle: inputValue,
      });
    } else if (/[^a-zA-Z0-9_;-]/.test("Text-NoSpeChars")) {
      this.setState({
        statusTitle: "error",
        hintText: "Veuillez saisir un titre sans caractères spéciaux",
        inputIsValid: false,
        valueInputTitle: inputValue,
      });
    } else if (inputValue.length > 99) {
      this.setState({
        statusTitle: "error",
        hintText: "Votre titre est trop long !",
        inputIsValid: false,
        valueInputTitle: inputValue,
      });
    } else {
      this.setState({
        statusTitle: "success",
        hintText: "Votre titre est valide !",
        inputIsValid: true,
        valueInputTitle: inputValue,
      });
    }
  }

  handleUpdateStepDesc(inputValue) {
    if (inputValue.length === 0) {
      this.setState({
        valueInputDesc:
          "Tutoriel de construction d'un fauteuil de jardin avec des palettes en bois",
        statusDesc: "neutral",
      });
    } else if (inputValue.length < 26) {
      this.setState({
        valueInputDesc: inputValue,
        statusDesc: "error",
      });
    } else if (inputValue.length < 130) {
      this.setState({
        valueInputDesc: inputValue,
        statusDesc: "success",
      });
    }
  }

  handleUpdateStepDiff(inputValue) {
    this.setState({
      valueInputDiff: inputValue,
    });
  }

  handleUpdateStepImg(inputValue) {
    this.setState({
      valueInputImg: window.URL.createObjectURL(inputValue),
    });
  }

  handleInputChange(newInputValue) {
    this.setState({
      newInputValue: newInputValue,
    });
  }

  handleSubmit() {
    if (!this.checkTitle(this.state.valueInputTitle)) {
      toast.error("Erreur : Le champ titre n'est pas valide", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    } else if (!this.checkDesc(this.state.valueInputDesc)) {
      toast.error("Erreur : Le champ description n'est pas valide", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (this.state.valueInputImg === "null") {
      toast.error("Erreur : L'image ne semble pas valide", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    } else if (!this.state.valueInputDiff) {
      toast.error("Erreur : Saisissez une difficultée", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    let objectToSubmit = {
      token: localStorage.getItem("token"),
      label: this.state.valueInputTitle,
      description: this.state.valueInputDesc,
      img: this.state.valueInputImg,
      difficulty: this.state.valueInputDiff,
    };

    fetchCreatorPost("http://127.0.0.1:8080/api/lesson/create", objectToSubmit)
      .then((response) => {
        if (response.statusCode === 200) {
          toast.success("Un franc succès ! Le cours a été créé", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          if (response.responseBody.lessonId) {
            this.props.history.push(
              "/dashboard/editCourse/" + response.responseBody.lessonId
            );
          }
        } else {
          toast.error(
            "Erreur, création refusée par le serveur : " +
              response.responseBody.errors,
            {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
        }
      })
      .catch(() => {
        toast.error("Erreur 500, Try again later :)", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }

  checkTitle(inputValue) {
    if (inputValue === this.state.defaultValueInputTitle) {
      return false;
    } else if (inputValue.length === 0) {
      return false;
    } else if (inputValue.length < 8) {
      return false;
    } else if (/[^a-zA-Z0-9_;-]/.test("Text-NoSpeChars")) {
      return false;
    } else return inputValue.length <= 99;
  }

  checkDesc(inputValue) {
    if (inputValue === this.state.defaultValueInputDesc) {
      return false;
    } else if (inputValue.length === 0) {
      return false;
    } else if (inputValue.length < 26) {
      return false;
    } else if (inputValue.length < 130) {
      return true;
    }
  }

  render() {
    return (
      <div className="dashboardCreateCourse-root">
        <div className="dashboardCreateCourse-mainTitle">
          Bienvenue sur la création de cours
        </div>
        <div className="dashboardCreateCourse-subTitle">
          C'est ici que tout commence, répondez à ce questionnaire pour débuter
        </div>
        
          <DashboardCreateCourseQuestions
            data={{
              onInputChangeTitle: this.handleUpdateStepTitle,
              onInputChangeDesc: this.handleUpdateStepDesc,
              onInputChangeDiff: this.handleUpdateStepDiff,
              onInputChangeImg: this.handleUpdateStepImg,
              statusTitle: this.state.statusTitle,
              statusDesc: this.state.statusDesc,
              statusDiff: this.state.statusDiff,
              statusImg: this.state.statusImg,
            }}
          />
        
        <div className="dashboardCreateCourse-preview">
          <CoursePreview
            courseImg={this.state.valueInputImg}
            courseTitle={this.state.valueInputTitle}
            courseText={this.state.valueInputDesc}
            courseDifficulty={this.state.valueInputDiff}
          />
          <div className="dashboardCreateCourse-submit">
            <div
              onClick={() => {
                this.handleSubmit();
              }}
              className="dashboardCreateCourse-submitButton"
            >
              <div className="dashboardCreateCourse-submitButtonDeco" />
              <span className="dashboardCreateCourse-submitButtonText">
                C'est parti !
              </span>
            </div>
          </div>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}

export default DashboardCreateCourse;
