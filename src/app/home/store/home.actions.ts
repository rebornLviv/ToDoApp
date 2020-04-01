import {Action} from '@ngrx/store';

export  const SET_TASKS = '[Home] Set Tasks';
export  const FETCH_TASKS = '[Home] Fetch Tasks';
export  const ADD_TASK = '[Home]  Add Task';
export  const  DELETE_TASK = '[Home] Delete Task';
export  const  UPDATE_TASK = '[Home] Delete Task';
export  const SHARE_TASK = '[Home]  Share Task';
export  class  DeleteTask implements Action{
  readonly  type = DELETE_TASK;
  constructor(public  payload: string) {}
}

export  class ShareTask implements Action{
  readonly  type  = SHARE_TASK;
  constructor(public payload: { id: string , shared: { shared: string } }) {
  }
}

export  class  UpdateTask {
  readonly  type = UPDATE_TASK;
  constructor(public payload: {id, edited: {title, description, status}}) {}
}

export  class AddTask implements  Action{
readonly  type = ADD_TASK;
constructor(public  payload: {title, description, creator, status}) {
}

}

export  class SetTasks  implements  Action{
  readonly  type = SET_TASKS;
  constructor(public  payload) {}
}
export  class FetchTasks  implements  Action{
  readonly  type = FETCH_TASKS;
}

export  type  HomeActions = SetTasks | FetchTasks;
