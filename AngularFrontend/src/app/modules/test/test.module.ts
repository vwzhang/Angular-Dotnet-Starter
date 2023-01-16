import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: TestComponent }
];

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [
    TestComponent
  ]
})
export class TestModule { }
