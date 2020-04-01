import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AddTaskComponent} from './home/add-task/add-task.component';
import {EditTaskComponent} from './home/edit-task/edit-task.component';
import {AuthComponent} from './auth/auth.component';
import {AuthGuard} from './auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  },
  {
    path: 'tasks' ,
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'new',
        component: AddTaskComponent
      },
      {
        path: ':id/edit',
        component: EditTaskComponent
      }
    ]
  },
  {
    path: 'auth',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
