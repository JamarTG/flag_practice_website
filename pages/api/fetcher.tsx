import axios from 'axios';

const fetcher = async () => {
    let data =  (await axios.get(`https://restcountries.com/v3.1/all`)).data;
    return await data
}

export default fetcher;
