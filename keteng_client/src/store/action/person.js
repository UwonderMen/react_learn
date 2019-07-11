import * as Types from "../action-types";
import { queryInfo } from "../../api/person"
const personAction = {
    queryBaseInfo() {
        return {
            type: Types.PERSON_QUERY_BASE,
            payload: queryInfo()
        }
    }
};

export default personAction;