//yapilan her istekte gecerli olmasini istedigimiz ayarlari tanimladigimiz bir axios ornegi.

import axios from "axios";

const api = axios.create({
  baseURL: "https://yt-api.p.rapidapi.com",
  params: {
    geo: "TR",
    lang: "tr",
  },
  headers: {
    "X-RapidAPI-Key": "c42da3e475mshe5aefd8d8677e93p174020jsn759dc23e76f4",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
});

export default api;
