import axios from "axios";
const BASE_URL = 'https://youtube138.p.rapidapi.com'
const options = {
    params: {hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key': '62a93a76c7msh807997f582ae397p1bc1dajsnae2a247f4bff',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };
//74e047ef29mshf6fd7527f5b2298p1185e4jsnc778e0d36985
//62a93a76c7msh807997f582ae397p1bc1dajsnae2a247f4bff
//093ae11236mshfe2bb2e23ba5a69p1d0732jsn066895e329fc
  export const fetchDataFromApi = async (query) =>{
    const url = `${BASE_URL}/search?q=${query}`;
    const { data } = await axios.get(url, options);
    return data;
  }