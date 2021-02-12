import React from 'react';
import {Link, useParams} from "react-router-dom";
import {fetchCreatorPost} from "../../../utils/fetchCreator";

function Login(){
  const {action} = useParams();
  if (action === 'signup') {
    return <SignUp/>
  } else if (action === 'signin') {
    return <SignIn/>
  }
}

class SignUp extends React.Component {
  render() {
    return (
      <div>
        <h1>Register</h1>
      </div>
    )
  }
}

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.handleConnect = this.handleConnect.bind(this);

  }


  handleConnect() {

    const emailValue = document.getElementById("email").value;
    const passValue = document.getElementById("password").value;
    const errorSpan = document.getElementById("errorSpan");
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailValue)) {
      return errorSpan.innerHTML += "Veuillez entrer une adresse mail valide"
    }


    let params = {
      email: emailValue,
      password: passValue
    }
    fetchCreatorPost('http://127.0.0.1:8080/api/authentification/login', params)
      .then(response => {
        if (response === undefined) {
          //ERREUR
        }
        if (response.statusCode !== 200) {
          //ERREUR
        }
        //SUCCESS
        let responseBody = response.responseBody
      })
      .catch(() => {
        //ERREUR
      })
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <input id="email" type="email"/>
        <input id="password" type="password"/>
        <button onClick={this.handleConnect} >SUBMIT</button>
        <span id="errorSpan"/>
      </div>
    )
  }
}

export default Login;
