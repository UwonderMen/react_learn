import axios from "./config";

export function checkLogin() {
    return axios.get("/person/login");
}

export function loginOut() {
    return axios.get("/person/loginout");
}

export function queryInfo() {
    return axios.get("/person/info");
}

export function login(payload) {
    return axios.post("/login", payload);
}