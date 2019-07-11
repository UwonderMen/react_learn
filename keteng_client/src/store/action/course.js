import * as Types from "../action-types";
import { getCourseList } from "../../api/course";

const courseAction = {
    queryBanner() {
        return {
            type: Types.COURSER_QUERY_BANNER,
            payload: getCourseList()//注意：这个属性名必须为payload，详细请看<react项目开发问题总结>
        }
    }
};

export default courseAction;