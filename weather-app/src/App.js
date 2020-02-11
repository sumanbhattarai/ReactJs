import React from 'react' ;
import Header from './components/Header' ;
import InputCity from './containers/InputCity' ;

export default class App extends React.Component {
  state = {
    temperature : '',
    error : '' ,
    isBusy : false
  }

  getTemperature = (city)=> {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=d885aa1d783fd13a55050afeef620fcb';
    this.setState({
      isBusy : true 
    })
    fetch(url).then(response=>{
      return response.json();
    }).then(data=>{
      const kelvin = data.main.temp ;
      const celcius = kelvin - 273.15 ;
      this.setState({
        temperature : celcius ,
        isBusy : false 
      })
    }).catch(error=>{
      this.setState({
        error : error.message() ,
        isBusy : false
      })
    })
    
  }
  
  render(){
    let data = null ;
    if(this.state.isBusy && !this.state.error){
      data = <p  style={{textAlign : 'center'}}> Loading ... </p>
    } else if (this.state.error) {
      data =  <p  style={{textAlign : 'center'}}>Something Went Wrong : {this.state.error}</p>
    } else if(this.state.temperature !== '') {
      data = <p  style={{textAlign : 'center'}}>Temperature is : {this.state.temperature} degree celcius.</p>
    }
    return(
      <React.Fragment>
          <Header/>
          <InputCity getTemperature={this.getTemperature}/> <br/>
          {data}
      </React.Fragment>
    );
  }
}