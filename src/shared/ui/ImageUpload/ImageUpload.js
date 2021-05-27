import './ImageUpload.css';
import React from "react";
import imgUpload from "./../../img/svg/photoUpload.svg"

function ImageUpload(props) {
  return <ImageUploadComp handleChangeImg={props.handleChangeImg}/>
}

class ImageUploadComp extends React.Component {

  constructor(props) {
    super(props);
    this.onFileChange = this.onFileChange.bind(this)
    this.fileData = this.fileData.bind(this)
    this.state = {
      difficulty: 1,
      file: null
    }
    this.bubbles = [React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef()]
  }

  onFileChange = event => {
    this.setState({
      file: event.target.files[0]
    })
    this.props.handleChangeImg(event.target.files[0])
  }
  fileData = () => {


    if (this.state.file) {
      let fileMesurement = 'Ko'
      let divisionIndice = 1000
      if (this.state.file.size > 1000000) {
        fileMesurement = "Mo"
        divisionIndice = 1000000
      }
      return(
          <span className="imageUpload-span">{this.state.file.name + " - " + (this.state.file.size/divisionIndice)+ fileMesurement}</span>
      )
    }
  }

  componentDidMount() {

  }

  render() {

    return (
      <div className="imageUpload-root">
        <input type="file" name="profilePicture" accept="image/png, image/gif, image/jpeg" className="imageUpload-input" onChange={this.onFileChange}/>
        <div className={ this.state.file ? "imageUpload-display imageUpload-displayBgValid" : "imageUpload-display"}>
          <img className="imageUpload-imgUpload" src={imgUpload} alt="UPLOAD"/>
        </div>
      </div>
    )
  }
}

export default ImageUpload;
