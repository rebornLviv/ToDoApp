import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import  * as fromApp from  '../store/app.reducer';
import {Subscription} from 'rxjs';
import Task from './models/task.model';
import  * as homeActions from './store/home.actions';
import {DataService} from './data/data.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from './dialog/dialog.component';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit , OnDestroy{
  constructor(private store: Store<fromApp.AppState>, private  dialog: MatDialog , private  router: Router) { }
  tasks: Task [] = []
  subs: Subscription;
  sb: Subscription;
  shareTo: string;
  shareId: string;
  cUserEmail: string;
  ngOnInit(): void {
    this.store.dispatch(new homeActions.FetchTasks());
    this.subs =  this.store.select('home').subscribe(
       data => {
          this.tasks = data.tasks;
       }
     );
    this.sb = this.store.select('auth').subscribe(
      data => {
        this.cUserEmail = data.user.email;
      }
    );
  }
  openDialog(id): void {
     this.shareId = id;
     const dialogRef = this.dialog.open(DialogComponent, {

     });

     dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      this.shareTo = result;
      if (this.shareTo){
        this.store.dispatch( new homeActions.ShareTask({ id: this.shareId ,  shared: { shared: this.shareTo} } ));
      }
      this.shareId = '';
      this.shareTo = '';
    });
  }
  onDelete(id: string){
     this.store.dispatch( new homeActions.DeleteTask(id));
  }
  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
    if(this.sb){
      this.sb.unsubscribe();
    }
  }


}
