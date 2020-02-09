
const intialState = {
    counter : 10 ,
    results : []
}

const reducer = ( state = intialState , action) => {
    switch(action){
        case 'INCREMENT' :
            console.log('increment') ;
            break ;
        default : 
            break ;
    }
}

export default reducer ;