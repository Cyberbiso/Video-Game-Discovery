import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '0298e018766448afbf74f99d8a4a7ce7'
    }
})