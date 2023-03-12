import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material.module';
import { DynamicChoiceComponent } from './dynamic-choice/dynamic-choice.component';
import { DynamicInputComponent } from './dynamic-input/dynamic-input.component';
import { DynamicFieldComponent } from './dynamic-field/dynamic-field.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { TestComponent } from './test/test.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DynamicChoiceComponent,
    DynamicInputComponent,
    DynamicFieldComponent,
    DynamicFormComponent,
    TestComponent,
  ],
  imports: [
    CommonModule, MaterialModule, ReactiveFormsModule
  ],
  exports: [
    TestComponent
  ]
})
export class DynamicComponentsModule { }
