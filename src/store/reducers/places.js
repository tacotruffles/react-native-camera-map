import * as actionTypes from '../actions/actionTypes';

const initialState = {
    places: [],
    placeSelected: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random().toString(), 
                    name: action.placeName,
                    image: {
                    uri: "https://c1.staticflickr.com/9/8358/8288031982_e8391a4475_n.jpg" //"https://c2.staticflickr.com/2/1489/24690903966_8a20c137fa_n.jpg"
                    }
                })
            }
        case actionTypes.DEL_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== state.placeSelected.key;
                }),
                placeSelected: null
            }
        case actionTypes.SELECT_PLACE:
            return {
                ...state,
                placeSelected: state.places.find(place => {
                    return place.key === action.placeKey;
                })
            }
        case actionTypes.DESELECT_PLACE:
            return {
                ...state,
                placeSelected: null
            }
        default:
            return state;
    }
}

export default reducer;