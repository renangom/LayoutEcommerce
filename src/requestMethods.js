import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzgzY2NlMDhiNzU1Mjk4YWM3ZDY1YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzczNDMxNSwiZXhwIjoxNjU3OTkzNTE1fQ._MoLsBTduahhk-qW-VmYjsrW_eD2tTR8ehccyF7M-sA"

export const publicRequest = axios.create({
    baseURL : BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Renan ${TOKEN}`}
})