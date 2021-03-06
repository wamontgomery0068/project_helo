import axios from "axios";

const initialState = {
    information: [],
    user: {},
    error: ""
};

// Action Types
const Get_Information = "Information_Data";
const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const GET_USER = "GET_USER";
const DELETE_INFORMATION = "DELETE_INFORMATION";
const ADD_POST = "ADD_POST";

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

// Register Action Creator
export function register(username, password){
    return{
        type: REGISTER,
        payload: axios.post("/auth/register", { username, password })
    };
};

// GET_USER Action Creator
export function getUser(){
    return{
        type: GET_USER,
        payload: axios.get("/auth/user")
    };
};

// DELETE_INFORMATION Action Creator
export function deleteInformation(id){
    console.log(id)
    return{
        type: DELETE_INFORMATION,
        payload: axios.delete(`/information/deleteInformation/${id}`)
    };
};

// ADD_POST Action Creator
export function addPost(title, image_url, content){
    return{
        type: ADD_POST,
        payload: axios.post(`/information/addPost`, {
            title,
            image_url,
            content
        })
    }
}

// Reducer Function
export default function reducer(state = initialState, action){
    switch (action.type){
        case LOGIN + "_FULFILLED":
            return { ...state, user: action.payload.data };
        case LOGIN + "_REJECTED":
            return { ...state, error: "Bad login" };
        case REGISTER + "_FULFILLED":
            return { ...state, user: action.payload.data };
        case REGISTER + "_REJECTED":
            return { ...state, error: "Bad Register" };
        case GET_USER + "_FULFILLED":
            return { ...state, user: action.payload.data };
        case DELETE_INFORMATION + "_FULLFILLED":
            return { ...state, information: action.payload.data};
        case DELETE_INFORMATION + "_PENDING":
            return { ...state};
        case ADD_POST + "_FULLFILLED":
            return { ...state, user: action.payload.data};
        case ADD_POST + "_REJECTED":
            return { ...state, error: "Couldn't Post" };
        default:
            return state;
    };
};