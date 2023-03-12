import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { DevelopmentComponent } from './development/development.component';

const routes: Routes = [
  { path: '', redirectTo: '/about-component', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'todo-list', loadChildren: () => import('./modules/todo-list/todo-list.module').then(m => m.TodoListModule) },
  { path: 'dev', component: DevelopmentComponent },
  { path: 'test', loadChildren: () => import('./modules/test/test.module').then(m => m.TestModule) }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
