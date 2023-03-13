import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { MaterialModule } from '../../material.module';
import { TodoListRoutingModule } from './todo-list-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TodoListComponent,
    IndexComponent,
    ViewComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    TodoListRoutingModule,
    MaterialModule
  ],
  exports: [
    TodoListComponent, IndexComponent, ViewComponent, AddComponent, EditComponent
  ]
})
export class TodoListModule { }
