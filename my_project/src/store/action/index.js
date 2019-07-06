//合并每个模块的action


/**
 * 注意：为了避免冲突，redux会将你合并的每个action挂在到相应的模块下
 * 合并后  action = {
 *      VoteAction:{
 *          support,
 *          against,
 *      },
 *      PersonAction:{
 * }
 * }
 * 
 */

import VoteAction from "./vote"
import PersonAction from "./person"



let action = {
    VoteAction,
    PersonAction
}

export default action;

