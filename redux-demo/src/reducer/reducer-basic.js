
const intialState = {
    counter : 0,
    results : []
}

const reducer = ( state = intialState , action) => {
    switch(action.type){
        case 'INCREMENT' :
            return {
                ...state ,
                counter : state.counter + 1 
            }
        case 'DECREMENT' :
            return {
                ...state ,
                counter : state.counter - 1
            }
        case 'SAVE' :
            const results = [...state.results] ;
            results.push(state.counter) ;
            return {
                ...state ,
                results : results
            }
        case 'DELETE_RESULT' : 
            const newResults = [...state.results] ;
            newResults.splice(action.index , 1) ;
            return {
                ...state ,
                results : newResults
            }
        default : 
            return state ;
    }
}

export default reducer ;