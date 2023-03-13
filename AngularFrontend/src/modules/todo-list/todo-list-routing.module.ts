import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { TodoListComponent } from './todo-list.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: 'todo-list', component: TodoListComponent,
    children: [
      { path: 'index', component: IndexComponent },
      { path: 'view/:id', component: ViewComponent },
      { path: 'add', component: AddComponent },
      { path: 'edit/:id', component: EditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoListRoutingModule { }
