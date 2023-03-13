import { Component, OnInit } from '@angular/core';
import { Todo } from '../interface/todo';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'todo-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private service: TodoListService) { }
  ngOnInit(): void {
    this.service.getAll().subscribe((data: Todo[]) => {
      this.todos = data;
      console.log(this.todos);
    })
  }

  delete(id: number) {
    if (confirm("are you sure to delete item " + id)) {
      this.service.delete(id).subscribe(res => {
        this.todos = this.todos.filter(item => item.id !== id);
        console.log("Todo deleted successrully!");
      });
    }
  }

}
