import './CourseEditorChapterManager.css';
import React from "react";
import {useHistory} from "react-router-dom";
import {fetchCreatorPost} from "../../../../../utils/fetchCreator";

function CourseEditorChapterManager(props) {
  const history = useHistory();
  return <CourseEditorChapterManagerComp history={history} courseId={props.courseId}/>
}

class CourseEditorChapterManagerComp extends React.Component {
  constructor(props) {
    super(props);
    this.getChapterOfLesson = this.getChapterOfLesson.bind(this)
    this.state = {
      courseId: this.props.courseId,
      chapterObject: undefined
    }
  }

  getChapterOfLesson() {
    if (this.props.courseId > 0) {
      if (!localStorage.getItem("token")) return this.props.history.push('/dashboard')
      let bodyParams = {
        token: localStorage.getItem("token"),
        lessonId: this.props.courseId
      }
      fetchCreatorPost("127.0.0.1:8080/api/chapter/getChapterFromLesson", bodyParams)
        .then(response => {
          if (response.statusCode === 200) {
            if (response.responseBody.chapters.length < 1) {
              let params = {
                token: localStorage.getItem("token"),
                lessonId: this.props.courseId,
                label: "Default",
                order: 0
              }
              fetchCreatorPost("127.0.0.1:8080/api/chapter/getChapterFromLesson", params)
                .then(responseBis => {
                  if (responseBis.statusCode === 200) {
                    this.getChapterOfLesson();
                  }
                })
                .catch(() => {

                })
            } else {
              this.setState({
                chapterObject: response.responseBody.chapters
              })
            }
          }
        })
        .catch(() => {

        })
    }
  }

  componentDidMount() {
    this.getChapterOfLesson()
  }

  render() {
    let chapterCardActive = <div className="courseEditorChapterManager-chapterCardActive">
        d
      </div>

    let chapterCardInative = <div className="courseEditorChapterManager-chapterCard">
      d
    </div>

    let chapterCardEmpty = <div className="courseEditorChapterManager-chapterCard">
      d
    </div>

    let chapterCardAdd = <div className="courseEditorChapterManager-chapterCard">
      d
    </div>

    let chapterCardArray = [
      chapterCardInative,
      chapterCardActive,
      chapterCardInative,
      chapterCardInative,
      chapterCardAdd,
      chapterCardEmpty,
      chapterCardEmpty
    ]
    return (
      <div className="courseEditorChapterManager-root">
        {
          chapterCardArray.map((item, index) => item)
        }
      </div>
    )
  }
}

export default CourseEditorChapterManager;
