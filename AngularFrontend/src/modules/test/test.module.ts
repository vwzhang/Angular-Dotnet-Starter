import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { RouterModule, Routes } from '@angular/router';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { MaterialModule } from '../../material.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: TestComponent }
];

@NgModule({
  declarations: [
    TestComponent,
    DynamicTableComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), MaterialModule, FormsModule
  ],
  exports: [
    TestComponent
  ]
})
export class TestModule { }
