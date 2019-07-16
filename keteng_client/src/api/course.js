import axios from "./config";
import QS from "qs";

export function getCourseList() {
    return axios.get("/course/bannerlist");
}

export function queryList(payload) {
    return axios.get("/course/list", {
        params: payload
    })
}

export function queryCourseInfo(payload) {
    return axios.get("/course/info", {
        params: QS.parse(payload.substr(1))
    })
}

export function addCart(payload) {
    return axios.post("/course/store/add", payload)
}

export function removeCart(payload) {
    return axios.post("/course/store/remove", payload)
}

