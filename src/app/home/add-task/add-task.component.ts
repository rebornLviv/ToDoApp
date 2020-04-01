import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import  * as fromApp from '../../store/app.reducer';
import  * as homeActions from  '../store/home.actions';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit,OnDestroy {
  status: string;
  title: string;
  description: string;
  creator: string;
  storeSub: Subscription;
  constructor( private  store: Store<fromApp.AppState>) { }
onAdd(){
    this.store.dispatch( new homeActions.AddTask({title: this.title, status: this.status , description: this.description , creator : this.creator }));
}
  ngOnInit(): void {
     this.storeSub =  this.store.select('auth').subscribe(
      authState => {
        this.creator =   authState.user.email;
      }
    );
  }
  ngOnDestroy(): void {
    if(this.storeSub){
      this.storeSub.unsubscribe();
    }
  }

}
