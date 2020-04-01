import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import Task from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export   class DataService {

  constructor( private http: HttpClient) {
  }
    fetchTasks(){
      return this.http
        .get<Task[]>(
          'https://to-do-app-698b5.firebaseio.com/tasks.json',{

          });
        // .subscribe(
        //   tasks => {
        //     return tasks;
        //   }
        // );
    }
    setTask(task: Task){
      return this.http.post('https://to-do-app-698b5.firebaseio.com/tasks.json',
        task);
    }
    removeTask(id: string){
      return this.http.delete(`https://to-do-app-698b5.firebaseio.com/tasks/${id}.json`);

    }
    updateTask( data: { id: string , edited: {title, description, status} } ){

       return this.http.patch(`https://to-do-app-698b5.firebaseio.com/tasks/${data.id}.json`,
      data.edited
      );
    }

  ShareTask( data: { id: string , shared: { shared: string } } ){

    return this.http.patch(`https://to-do-app-698b5.firebaseio.com/tasks/${data.id}.json`,
      data.shared
    );
  }





}
