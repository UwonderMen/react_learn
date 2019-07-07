import * as actionTypes from "../action-types";

function toDoListAdd(payload) {
    return {
        type: actionTypes.TODOLIST_ADD,
        payload: payload
    }
}

function toDoListDone(flag) {
    return {
        type: actionTypes.TODOLIST_DONE,
        flag
    }
}

function toDoListWillDo(flag) {
    return {
        type: actionTypes.TODOLIST_WILL_DO,
        flag
    }
}

function toDoListAll() {
    return {
        type: actionTypes.TODOLIST_ALL
    }
}

function toDoListInit() {
    return {
        type: actionTypes.$$INIT_STATE
    }
}

function updateState(id, newState) {
    return {
        id,
        newState,
        type: actionTypes.TODOUPDATE
    }
}

function toDoDelete(id) {
    return {
        id,
        type: actionTypes.TODODELETE
    }
}

export default {
    toDoListAdd,
    toDoListDone,
    toDoListWillDo,
    toDoListAll,
    toDoListInit,
    updateState,
    toDoDelete
}