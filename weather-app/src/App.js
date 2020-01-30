import React from 'react';
import Weather from './components/Weather' ;

export default class App extends React.Component{
  state={
    location : '',
    temperature : '',
    rainProbability : '',
    address : '',
    show : false,
  }

  handleChange = e => {
    this.setState({
      location : e.target.value
    });
  }

  handleClick = async()=>{
   const cordinates = await this.geoCode() ;
   const detail = await this.getWeather(cordinates);
   this.setState({
     temperature : detail[0] ,
     rainProbability : detail[1],
     address : cordinates[2],
     show : true 
   })
  }

  geoCode = async()=>{
      const url = 'https://cors-anywhere.herokuapp.com/https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(this.state.location) +'.json?access_token=pk.eyJ1Ijoic3VtYW5iaGF0dGFyYWkiLCJhIjoiY2sxc3plbHpqMDA5dTNjcXM0ZnNldmV6biJ9.h3Oq798TEzuOq1t06fXM9A&limit=1' ;
      const response = await fetch(url);
      const data = await response.json();
      const longitude = data.features[0].center[0] ;
      const latitude = data.features[0].center[1] ;
      const place = data.features[0].place_name ;
      return [latitude , longitude , place];
  }

  getWeather = async cordinates=>{
    const url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/41f57b0025108c3d1b7d34edcaa7db60/'+ cordinates[0]+','+cordinates[1]+'?units=si'  ;
    const response = await fetch(url) ;
    const data = await response.json();
    const temperature = data.currently.temperature ;
    const rainProbability = data.currently.precipProbability;
    return [temperature , rainProbability] ;
  }

  render(){
    let weather = null ;
    if(this.state.show){
      weather = (
      <Weather location={this.state.address} temperature={this.state.temperature} rainingChance={this.state.rainProbability} />
      )
    }
    return(
      <div>
        <input type="text" value={this.state.location} onChange={this.handleChange} placeholder="Location" />
        <button onClick={this.handleClick} disabled={!this.state.location}>Get Weather</button>
        <br/>
        {weather}
      </div>
    );
  }
}
