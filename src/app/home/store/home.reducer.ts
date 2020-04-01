import Task from '../models/task.model';
import * as homeActions from  './home.actions';
export interface State {
tasks: Task[];
}
const initialState: State = {
  tasks: [],
};

export function homeReducer(
  state = initialState,
  action: homeActions.HomeActions
) {
  switch (action.type) {
    case homeActions.SET_TASKS:
      console.log(action.payload)
      return {
        ...state,
        tasks: action.payload
      };
    default:
      return state;
  }
}
