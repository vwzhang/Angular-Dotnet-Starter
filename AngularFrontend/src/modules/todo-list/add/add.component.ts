import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  form!: FormGroup;

  constructor(public service: TodoListService, private router: Router) {

  }
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      isComplete: new FormControl('')
    });
  }
  get f() {
    return this.form.controls;
  }
  submit() {
    console.log(this.form.value);
    this.service.create(this.form.value).subscribe((res: any) => {
      console.log('Todo created successfully!');
      this.router.navigateByUrl('todo-list/index');
    })
  }
}
