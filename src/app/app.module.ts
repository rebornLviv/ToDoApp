import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { AddTaskComponent } from './home/add-task/add-task.component';
import { EditTaskComponent } from './home/edit-task/edit-task.component';
import { HeaderComponent } from './home/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {StoreModule} from '@ngrx/store';
import  * as fromApp from  './store/app.reducer';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {HomeEffects} from './home/store/home.effects';
import {DataService} from './home/data/data.service';
import {MatButtonModule} from '@angular/material/button';
import {AuthEffects} from './auth/store/auth.effects';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './home/dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    AddTaskComponent,
    EditTaskComponent,
    HeaderComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatListModule,
    MatCardModule,
    StoreModule.forRoot(fromApp.appReducer),
    MatIconModule,
    HttpClientModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    EffectsModule.forRoot([HomeEffects, AuthEffects]),
    MatButtonModule,
    MatDialogModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
