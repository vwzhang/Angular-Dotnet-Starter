import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../interface/todo';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'todo-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id!: number;
  todo!: Todo;
  form!: FormGroup;

  constructor(public service: TodoListService, private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.find(this.id).subscribe((data: Todo) => {
      this.todo = data;
    });

    this.form = new FormGroup({
      //id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      isComplete: new FormControl('')
    });
  }

  get f() { return this.form.controls; }

  submit() {
    console.log(this.form.value);
    this.service.update(this.id, this.form.value).subscribe((res: any) => {
      console.log('Todo updated successfully!');
      this.router.navigateByUrl('todo-list/index');
    })
  }
}
