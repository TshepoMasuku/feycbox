import React from 'react';
import ParticlesCanvas from "./components/tsParticles/ParticlesCanvas"; 
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import SignIn from './components/SignIn/SignIn.js';
import Register from './components/Register/Register.js';
import './App.css';

const initialState = {
  input: '',
  imageURL: '',
  box: {},
  route: 'loggedOut',
  isSignedIn: false,
  user: {
    id: "",
    name: "",
    surname: "",
    email: "",
    entries: 0,
    joined: ""
  }
};

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialState;
    // Using the binding method.  
    this.loadUser = this.loadUser.bind(this);
    this.displayFaceBox = this.displayFaceBox.bind(this);
    this.onPictureSubmit = this.onPictureSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onRouteChange = this.onRouteChange.bind(this);
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        surname: data.surname,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      }
    })
  }

  calculateFaceLocation = (faceData) => {
    // console.log('calculateFaceLocation --> responseData is....', faceData)
    const clarifaiFace = faceData.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return ({
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height),
    })
  }

  displayFaceBox = (faceBox) => {
    this.setState({box: faceBox})
  }

  onPictureSubmit = () => {
    this.setState({imageURL: this.state.input})
    fetch(`${process.env.REACT_APP_API_URL}imageURL`, {
      method:"post",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then( response => response.json() )
      .then(
        (response) => {
          // console.log('CLARIFAI API response is....',response);
          if(response !== "unable to work with API."){
            fetch(`${process.env.REACT_APP_API_URL}image`, {
              method:"put",
              headers:{"Content-Type": "application/json"},
              body: JSON.stringify({
                id: this.state.user.id
              })
            })
              .then(res => res.json())
              .then(picEntriesCount => {
                this.setState(
                  Object.assign(this.state.user, {entries: picEntriesCount})
                )
              })
              .catch( (err) => {
                console.log('The /image fetch -- error was....',err) 
              });
          }
          this.displayFaceBox( this.calculateFaceLocation(response) );
        })
      .catch( (err) => {
        console.log('The /imageURL fetch -- error was....',err);
      });
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onRouteChange = (nextRoute) => {
    // nextRoute: loggedOut || register || signedIn .
    if (nextRoute === 'loggedOut'){
      this.setState(initialState)
    } else if (nextRoute === 'signedIn') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: nextRoute})
  }

  render() {
    const { route,imageURL,isSignedIn,box,user } = this.state;
    return (
      <div className="App">
        <ParticlesCanvas />
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />
        {route === 'signedIn'
        ? <div>
            <Logo />
            <Rank name={user.name} surname={user.surname} entries={user.entries} />
            <ImageLinkForm onInputChange={this.onInputChange} onPictureSubmit={this.onPictureSubmit} />
            <FaceRecognition box={box} imageURL={imageURL} />
          </div>
        : (route === 'loggedOut'
            ? <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
            : <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
          )
        }
      </div>
    );
  }         
}

export default App;