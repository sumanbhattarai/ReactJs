import * as actionTypes from "./action"; ;

const initialState = {
    persons : []
}

const reducer = (state = initialState , action) => {
    switch(action.type){
        case actionTypes.ADD :
            const newPerson = {name : action.detail.name , age:action.detail.age}
            const persons = [...state.persons];
            persons.push(newPerson) ;
            return {
                ...state ,
                persons : persons

            };
        case actionTypes.DELETE : 
            const updatedPersons = [...state.persons] ;
            updatedPersons.splice(action.index , 1) ;
            return {
                ...state ,
                persons : updatedPersons
            }
        default :
            return state ;
    }
}

export default reducer ;