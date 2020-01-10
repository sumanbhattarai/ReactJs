import React from 'react' ;
import element from './Clock.module.css' ;

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hours : '',
            minutes : '' ,
            seconds : '' ,
            ampm : ''
        }
    }

    componentWillMount(){
         const result = this.udpdateTime() ;
         this.setState({
             hours : result[0] ,
             minutes : result[1] ,
             seconds : result[2] , 
             ampm : result[3]
         });
    }

    componentDidMount(){
        setInterval(()=>{
            const result = this.udpdateTime();
            this.setState({
                hours : result[0] ,
                minutes : result[1] ,
                seconds : result[2] , 
                ampm : result[3]
            });
        } , 1000)
    }

    udpdateTime(){
        let date = new Date();
        let hours = date.getHours() ;
        let minutes = date.getMinutes() ;
        let seconds = date.getSeconds() ;
        let ampm
        if(hours > 12){
            hours -= 12 ;
            ampm = 'pm' ;
        }
        else if (hours === 12){
            ampm = 'pm'
        }
        else {
            ampm = 'am'
        }

        if(minutes < 10) {
            minutes = '0' + minutes ;
        }
        if(seconds < 10 ){
            seconds = '0' + seconds ;
        }
        return [ hours , minutes , seconds , ampm] ;
    }

    render(){
        return(
            <div className = {element.time}>
                <p>
                {this.state.hours} : {this.state.minutes} : {this.state.seconds} {this.state.ampm}
                </p>
            </div>
        );
    }
}

export default Clock ;