import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ADD_TASK, DELETE_TASK, FETCH_TASKS, SetTasks, SHARE_TASK, UPDATE_TASK} from './home.actions';
import {concatMap, map, mergeMap, pluck, switchMap, withLatestFrom} from 'rxjs/operators';
import {DataService} from '../data/data.service';
import  * as homeActions from  './home.actions';
import {Store} from '@ngrx/store';
import  * as fromApp from  '../../store/app.reducer';
@Injectable()
export  class HomeEffects {
  constructor(private actions$: Actions, private dataStorage: DataService , private  store$: Store<fromApp.AppState>) {}
  @Effect()
  fetchTasks = this.actions$.pipe(
    ofType(FETCH_TASKS),
    withLatestFrom(this.store$),
    switchMap(
      () => {
        console.log('here')
        return  this.dataStorage.fetchTasks().pipe(
          map(resData => {
            let email  = '';
            this.store$.select('auth').subscribe( state => email = state.user.email)
            console.log('resdata', resData);
            const taskArray = [];
            for (const key in resData) {
              if (resData.hasOwnProperty(key)) {
                if (resData[key].creator === email || resData[key].shared === email){
                  taskArray.push({...resData[key], id: key});
                }
              }
            }
            return taskArray;
          }),
          map(tasks => {
            return new homeActions.SetTasks(tasks);

          })
        );
      }
    )
  );
  @Effect()
  setTask = this.actions$.pipe(
    ofType(ADD_TASK),
    pluck('payload'),
    switchMap(
      data => this.dataStorage.setTask(data)
    ),
    map(
      () => {
       return new  homeActions.FetchTasks();
      }
    )

  );

  @Effect()
  deleteTask = this.actions$.pipe(
    ofType(DELETE_TASK),
    pluck('payload'),
    switchMap(
      data => this.dataStorage.removeTask(data)
    ),
    map(
      () => {
        return new homeActions.FetchTasks();
      }
    )
  );
  @Effect()
  updateTask = this.actions$.pipe(
    ofType(UPDATE_TASK),
    pluck('payload'),
    switchMap(
      data => this.dataStorage.updateTask(data)
    ),
    map(
      () => new homeActions.FetchTasks()
    )
  );
  @Effect()
  shareTask = this.actions$.pipe(
    ofType(SHARE_TASK),
    pluck('payload'),
    switchMap(
      data => this.dataStorage.ShareTask(data)
    ),
    map(
      () => {
        return  new homeActions.FetchTasks();
      }
    )
  );
}


