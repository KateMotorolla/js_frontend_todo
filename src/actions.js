export const TODO_ADD = 'TODO_ADD'
export const TODO_ADD_ALL = 'TODO_ADD_ALL'
export const TODO_DELETE = 'TODO_DELETE'
export const TODO_UPDATE_STATE = 'TODO_UPDATE_STATE'

export function todoAdd(_id, name, description) {
    return { type: TODO_ADD, _id, name, description };
}

export function todoAddAll(todo_list) {
    return { type: TODO_ADD_ALL, todo_list};
}

export function todoDelete(_id) {
    return { type: TODO_DELETE, _id};
}

export function todoUpdateState(_id) {
    return { type: TODO_UPDATE_STATE, _id};
}