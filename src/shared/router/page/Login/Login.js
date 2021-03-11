import React from 'react';
import {Link, useParams, useHistory} from "react-router-dom";
import {fetchCreatorPost} from "../../../utils/fetchCreator";
import './Login.css'

function Login(){
  const {action} = useParams();
  const history = useHistory();
  if (action === 'signup') {
    return <SignUp history={history}/>
  } else if (action === 'signin') {
    return <SignIn history={history}/>
  }
}

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.state = {
      registered : false
    }
  }

  handleRegister() {
    const usernameValue = document.getElementById("name").value;
    const emailValue = document.getElementById("email").value;
    const passValue = document.getElementById("password").value;
    const errorSpan = document.getElementById("errorSpan");
    if (usernameValue.length < 1 ) {
      return errorSpan.innerHTML = "Veuillez spécifier un nom."
    }
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailValue)) {
      return errorSpan.innerHTML = "Veuillez entrer une adresse mail valide"
    }
    if (!/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])$/.test(passValue) && passValue.length < 8) {
      return errorSpan.innerHTML = "Votre mot de passe doit contenir au minimum une majuscule, un caractère spécial, une minuscule et un chiffre. Votre mot de passe doit faire au minimum 8 caractères"
    }

    let params = {
      username: usernameValue,
      email: emailValue,
      password: passValue
    }

    fetchCreatorPost('http://127.0.0.1:8080/api/auth/register', params)
      .then(response => {
        if (response === undefined) {
          return errorSpan.innerHTML = "Erreur 500 !"
        }
        if (response.statusCode !== 200 && response.statusCode !== 418) {
          return errorSpan.innerHTML = "Erreur 500 !"
        }
        if (response.statusCode === 418) {
          return errorSpan.innerHTML = "Un compte avec la même adresse mail existe déjà."
        }
        //SUCCESS
        this.setState({
          registered : true
        })
        errorSpan.innerHTML = ""
        setTimeout(() => {
          this.props.history.push("../login/signin")
        }, 3000)
      })
      .catch(() => {
        return errorSpan.innerHTML = "Erreur 500 !"
      })
  }

  render() {
    return (
      <div className = "LoginPage-root">
        <h1 className="LoginPage-HeadTitleSignUp">Register</h1><br/>
        <label htmlFor="name">Pseudo</label>
        <input id="name" type="text"/><br/>
        <label htmlFor="email">Email</label>
        <input id="email" type="email"/><br/>
        <label htmlFor="password">Password</label>
        <input id="password" type="password"/><br/><br/>
        <button onClick={this.handleRegister} >INSCRIPTION</button>
        {
          this.state.registered ?
            <p>Vous serez rediriger vers la page de connexion dans 3s, si cela ne fonctionne pas cliquez ici : <Link to="../login/signin"> Connectez-vous !</Link></p>
            :
            <p>Vous avez dèjà un compte ? <Link to="../login/signin"> Connectez-vous !</Link></p>
        }
        <span id="errorSpan"/>
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
    fetchCreatorPost('http://127.0.0.1:8080/api/auth/login', params)
      .then(response => {
        if (response === undefined) {
          //ERREUR
        }
        if (response.statusCode !== 200) {
          //ERREUR
        }
        //SUCCESS
        let responseBody = response.responseBody
        localStorage.setItem("token", responseBody.token)
        localStorage.getItem("token")
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
