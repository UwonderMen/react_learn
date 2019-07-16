import * as Types from "../action-types";
import { getCourseList, queryList, queryCartInfo } from "../../api/course";

const courseAction = {
    queryBanner() {
        return {
            type: Types.COURSER_QUERY_BANNER,
            payload: getCourseList()//注意：这个属性名必须为payload，详细请看<react项目开发问题总结>
        }
    },
    queryList(payload = {}) {
        let { limit = 10, page = 1, type = "all", flag = "push" } = payload;
        return async (dispatch) => {
            let result = await queryList({
                limit, page, type
            });
            dispatch({
                type: Types.COURSER_QUERY_LIST,
                result,
                flag,
                courseType: type
            })
        }
    },
   
};

export default courseAction;