import axios from "./config";

export function getCourseList() {
    return axios.get("/course/bannerlist");
}