
/**
 * 每个版块单独的action-creator：就是把dispatch派发时候需要
 * 传递的action对象进一步封装处理（这样做会在reaact-redux体验到好处）
 *
 */

import * as ActionTypes from "../action-types";

let vote = {
    support() {
        return {
            type: ActionTypes.VOTE_SUPPORT
        }
    },
    against() {
        return {
            type: ActionTypes.VOTE_AGAINST
        }
    }
}

export default vote;