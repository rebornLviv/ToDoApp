import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import  * as authActions from  './auth/store/auth.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'task-manager';
  constructor(private  store: Store<fromApp.AppState>) {
  }
  ngOnInit(): void {
    this.store.dispatch( new authActions.AutoLogin());
    this.store.select('auth').subscribe(
      state => {
        console.log( state.user);
      }
    );
  }
}
