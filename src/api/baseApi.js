import axios from "axios";

const client = axios.create({
    baseURL: 'http://www.omdbapi.com/?apikey=2146f476&',
    // headers: {
    //     'Accept': 'aplication/json',
    //     'Authorization': '2146f476'
    // }
})

export default client;