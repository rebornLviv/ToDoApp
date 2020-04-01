import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import  * as fromApp from  '../../store/app.reducer';
import {map} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import  * as homeActions from '../store/home.actions';
@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit , OnDestroy {

  constructor( private  route: ActivatedRoute,
               private  store: Store<fromApp.AppState>,
               private   router: Router) { }
  status: string;
  title: string;
  description: string;
  id = '';
  routeSub: Subscription;
  storeSub: Subscription;
  onEdit(){
   this.store.dispatch(
     new homeActions.UpdateTask({id: this.id,  edited: {title: this.title, description: this.description, status: this.status}}));

  }
  ngOnInit(): void {
    this.routeSub =  this.route.params.subscribe(
      params => {
        this.id = params['id'];
        this.storeSub =  this.store.select('home').pipe(
          map(
            state => state.tasks.find( t => t.id === this.id)
          )
        ).subscribe(
          task => {
            console.log(this.id)
            console.log('task', task)
            if (!task){
             this.router.navigate(['']); }
             else {
              this.status = task.status;
              this.description = task.description;
              this.title = task.title;
             }
          }
        );
      }
    );
  }
  ngOnDestroy(): void {
    if (this.storeSub){
      this.storeSub.unsubscribe();
    }
    if (this.routeSub){
      this.routeSub.unsubscribe();
    }
  }

}
