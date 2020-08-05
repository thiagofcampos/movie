import { GET_MOVIES_REQUEST } from '../typeAction';
import axios from 'axios';

const API = 'https://api.themoviedb.org/3/';
const apiKey = "6b9fb5d0b9f9183868c0963c4a80de75";

export async function GetMovie(){
    
    const data = await axios.get(`${API}movie/top_rated?api_key=${apiKey}`);
    return data.data
    
}

export async function GetMoviePopular(){
    
    const data = await axios.get(`${API}movie/popular?api_key=${apiKey}`);
    return data.data
    
}

export async function SetMovie(data, useDispatch) {
    const dispatch = useDispatch;
    return dispatch({type:GET_MOVIES_REQUEST, payload: data});
}