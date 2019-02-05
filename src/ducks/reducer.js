import axios from "axios";

const initialState = {
    information: [],
    user: {},
    error: ""
};

// Action Types
const Get_Information = "Information_Data";
const LOGIN = "LOGIN";

// Get_Information Action Creator
export function getInformation(){
    return{
        type: Get_Information,
        payload: axios.get("/information/all")
    };
};

// Login Action Creator
export function login(username, password){
    return{
        type: LOGIN,
        payload: axios.post("/auth/login", { username: username, password })
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