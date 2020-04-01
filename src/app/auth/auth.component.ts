import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import  * as authActions from './store/auth.actions';
import  * as fromApp from  '../store/app.reducer';
import {NgForm, NgModel} from '@angular/forms';
import {Store} from '@ngrx/store';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit , OnChanges{
  loginMode = false;
  errorMessage: string;
  switchMode(){
    this.loginMode = ! this.loginMode;
  }


  onSubmit(authForm: NgForm){
    if (!authForm.valid){
      return;
    }

    let email = authForm.value.email;
    let password = authForm.value.password;
    console.log('email', email);
    console.log('password', password);

    if (this.loginMode){
      console.log('login');
      this.store.dispatch(new authActions.LoginStart({email:email, password:password}));
    }
    else {
      console.log('signup')
      this.store.dispatch(new authActions.SignupStart({email:email, password:password}));


    }
    authForm.reset();
  }
  constructor(private  store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.store.select('auth').subscribe(
      authState => {
        this.errorMessage   =  authState.authError;
      }
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
  }

}
