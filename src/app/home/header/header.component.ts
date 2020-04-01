import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import  * as fromApp from  '../../store/app.reducer';
import  * as authActions from  '../../auth/store/auth.actions';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
   storeSub: Subscription ;
  isAuthenticated = false;

  constructor( private  store: Store<fromApp.AppState>) { }


  onLogout(){
      this.store.dispatch( new authActions.Logout());
  }
  ngOnInit(): void {
 this.storeSub  =  this.store.select('auth').subscribe(

      authState => {
    this.isAuthenticated =  !! authState.user;
      }
    );
  }
  ngOnDestroy(): void {
    if (this.storeSub){
      this.storeSub.unsubscribe();
    }
  }

}
