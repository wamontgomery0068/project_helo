import axios from "axios";

const initialState = {
    information: []
};

// Action Types
const Get_Information = "Information_Data"

// Get_Information Action Creator
export function information(){
    return{
        type: Get_Information,
        payload: axios.get("/information/all")
    };
};

// Reducer Function
export default function reducer(state = initialState, action){
    switch (action.type){
        case Get_Information + "_FULFILLED":
            return { ...state, user:action.payload.data};
        default:
            return state;
    };
};