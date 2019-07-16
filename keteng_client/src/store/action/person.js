import * as Types from "../action-types";
import { queryInfo, queryCartInfo } from "../../api/person"
const personAction = {
    queryBaseInfo() {
        return {
            type: Types.PERSON_QUERY_BASE,
            payload: queryInfo()
        }
    },
    queryUnPay(payload = {}) {
        let { state = 0 } = payload;
        return {
            type: Types.COURSE_UNPAY,
            payload: queryCartInfo(state)
        }
    },
    queryPay(payload = {}) {
        let { state = 1 } = payload;
        return {
            type: Types.COURSE_PAY,
            payload: queryCartInfo(state)
        }
    },
    /** 
     * 未支付列表选中状态操作
     * @param {String|Number} mode all：表示全选或者全不选，id(商品id)：控制某一个课程控制选择
     * 操作某一个具体的商品时，都要验证是否选中，如果没有，我们同事也得修改全选状态，反之亦然。
    */
    handleSelect(mode) {
        return {
            type: Types.COURSE_HANDLE,
           mode
        }
    }
};

export default personAction;