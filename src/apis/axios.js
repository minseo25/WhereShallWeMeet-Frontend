import axios from "axios";

export const backendInstance = axios.create({
  baseURL: "https://where2meet.store/",
  headers: {
    "Content-Type": "application/json"
  }
});

export const kakaoInstance = axios.create({
  baseURL: "https://dapi.kakao.com/v2/local",
  headers: {
    "Content-Type": "application/json",
    Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}`
  }
})

export const odsayInstance = axios.create({
  baseURL: "https://api.odsay.com/v1/api",
  headers: {
    "Content-Type": "application/json"
  }
})