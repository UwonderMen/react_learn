import axios from "./config";

export function checkLogin() {
    return axios.get("/person/login");
}