import React from 'react';
import './App.css';
import Snake from './components/Snake';
import Food from './components/Food' ;
import snake from './components/Snake';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state= this.initial;
  }

  initial = {
      direction : 'right' ,
      speed : 200,
      snakeDots : [
        [0,0],
        [2,0],
        [4,0]
      ],
      food : this.randomFoodPosition()
  }

  componentDidMount(){
    setInterval(this.moveSnake , this.state.speed);
    document.onkeydown = this.onKeyDown ;
  }

  componentDidUpdate(){
    this.checkIfBoundaryOut();
    this.checkIfCrossed();
    this.checkIfEat();
  }

  onKeyDown=(e)=>{
    e = e || window.event ;
    switch(e.keyCode){
      case 37 : 
        this.setState({ direction : 'left'}) ;
        break ;

      case 38 : 
        this.setState({ direction : 'top'}) ;
        break ;

      case 39 : 
        this.setState({direction : 'right'}) ;
        break ;

      case 40 : 
        this.setState({direction : 'down'}) ;
        break; 
    }
  }

  randomFoodPosition(){
    const left = Math.floor((Math.random()*99)/2)*2 ;
    const top = Math.floor((Math.random()*99)/2)*2 ;
    return [left , top] ;
  }

  moveSnake=()=>{
    let snakeDots = [...this.state.snakeDots];
    let head = snakeDots[snakeDots.length-1] ;
    switch(this.state.direction){
      case 'right':
        head = [head[0]+2 , head[1]] ;
        break ;
      case 'left' :
        head = [head[0]-2 , head[1]] ;
        break ;
      case 'top' :
        head = [head[0] , head[1]-2] ;
        break ;
      case 'down' :
        head = [head[0] , head[1]+2] ;
        break ;
    }
    snakeDots.push(head);
    snakeDots.shift();
    this.setState({snakeDots : snakeDots});
  }

  checkIfEat=()=>{
    let snakeDots = [...this.state.snakeDots];
    let head = snakeDots[snakeDots.length-1];
    if(head[0]==this.state.food[0] && head[1]==this.state.food[1]){
      this.setState({food : this.randomFoodPosition()});
      this.growSnake();
      this.speedIncrease();
    }
  }

  growSnake=()=>{
    let snakeDots = [...this.state.snakeDots];
    snakeDots.unshift([]);
    this.setState({snakeDots : snakeDots});
  }

  speedIncrease=()=>{
    if(this.state.speed > 20 ){
      this.setState({
        speed : this.state.speed - 20
      })
    }
  }

  checkIfBoundaryOut = ()=>{
    let snakeDots = [...this.state.snakeDots];
    let head = snakeDots[snakeDots.length - 1];
    if(head[0] < 0 || head[0] > 98 || head[1] < 0 || head[1] > 98 ){
      this.gameOver();
    }
  }

  checkIfCrossed = ()=> {
    let snakeDots = [...this.state.snakeDots];
    let head = snakeDots[snakeDots.length-1];
    snakeDots.pop();
    snakeDots.forEach(dot=>{
      if(head[0]==dot[0] && head[1]==dot[1])
        this.gameOver();
    })
  }

  gameOver=()=>{
    alert(`Game Over. Your score is ${this.state.snakeDots.length - 3}`);
    this.setState(this.initial);
  }

  render(){
    return(
      <div>
       <h1>Welcome to the Snake Game</h1>
       <div className='game-board'>
         <Snake snakeDots={this.state.snakeDots} />
         <Food foodDots = {this.state.food} />
       </div>
      </div>
    );
  }
}

export default App;
