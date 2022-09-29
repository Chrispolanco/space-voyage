import React, { Component } from "react";
import Date from './Date'; 
import FetchedPhoto from './FetchedPhoto'; 
import DisplayPeopleInSpace from './DisplayPeopleInSpace'; 
import GoogleMaps from './GoogleMap'; 
import LiveFeed from "./LiveFeed";
import './App.css'; 

class App extends Component {
  state = {
    date: "",
    photo: "",
    peopleInSpace: [], 
    lat: "", 
    long: ""
  };

  FetchLatLong = () =>{
    fetch('http://api.open-notify.org/iss-now.json')
      .then(response => response.json())
      .then(locationData => this.setState({ lat: locationData.iss_position.latitude, long: locationData.iss_position.longitude })); 
  }; 

  FetchPeopleInSpace = () =>{
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(peopleDate => this.setState({peopleInSpace: peopleDate}))
  }; 

  FetchPhotoFromApi = date => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=eWBTigazdNb4MKQni6PPiqmBtQbTwBJGATdmAm17`)
      .then(response => response.json())
      .then(photoData => this.setState({ photo: photoData }));
  };

  updateDate = e => {
    e.preventDefault();
    this.setState({ date: e.target[0].value });
    this.FetchPhotoFromApi(this.state.date);
  };

  componentDidMount() {
    this.FetchPeopleInSpace()
    this.FetchLatLong()
    this.FetchPhotoFromApi("2020-12-12")
  }

  render() {
    return (
      <div>
        <h1 className="title">Space Slice</h1>

        <div>
            <FetchedPhoto photo={this.state.photo} />  
        </div>

        <div className="ui hidden divider"></div>

        <h3>NASA Photo Of The Day</h3>
        <h3>Date Selection</h3>

        <div>
            <Date updateDate={this.updateDate} />
        </div>
        <div className="ui hidden divider"></div>

        <div className="'ui placeholder segment">
            <div className="ui two column very relaxed stackable grid">
                <div className="column">
                    <LiveFeed/> 
                </div>
                <div className="column">
                    <GoogleMaps lat={this.state.lat} long={this.state.long}/>  
                </div>
            </div>
        </div> 
        
        <h2 className="secondaryHeader">Current Astronauts In Space</h2>
        <div>
          <DisplayPeopleInSpace peopleInSpace = {this.state.peopleInSpace.people} /> 
        </div>

        <a className="footer" href="https://www.freepik.com/vectors/alien-planet">Alien planet vector created by upklyak - www.freepik.com</a>
      </div>
    );
  }
}

export default App;
