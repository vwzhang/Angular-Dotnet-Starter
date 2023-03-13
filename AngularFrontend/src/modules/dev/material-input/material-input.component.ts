import { Component } from '@angular/core';

const material_input_types: string[] = [
  "color", "date", "datetime-local", "email", "month", "number", "password", "search", "tel", "text", "time", "url", "week"];

type InputTypes = "color" | "date" | "datetime-local" | "email" | "month" | "number" | "password" | "search" | "tel" | "text" | "time" | "url" | "week";

enum InputType {
  Color = "color",
  Date = "date",
  DateTime = "datetime-local",
  Email = "email",
  Month = "month",
  Number = "number",
  Password = "password",
  Search = "search",
  Phone = "tel",
  Text = "text",
  Time = "time",
  URL = "url",
  Week = "week"
}

enum ActionType {
  Reset = "reset",
  Submit = "submit",
  Upload = "upload"
}
const html5_input_types: string[] = [
  "button", //action
  "checkbox", //boolean
  "color",
  "date",
  "datetime-local",
  "email",
  "file",   // upload
  "hidden", // attribute
  "image",  // image button
  "month",
  "number",
  "password",
  "radio",  // selection
  "range",  // slide?
  "reset",  // action
  "search",
  "submit", // action
  "tel",
  "text",
  "time",
  "url",
  "week",
];

export interface IOption {
  label: string;
  value: string;
}

export interface IFormItem {
  id: string;
  name: string;
  type: string;
  tooltip: string;
  label: string;
}

export interface IInputItem extends IFormItem {
  datatype: string;
  default: string;
  hint: string;
  placeholder: string;
}

export interface ISelectionItem extends IFormItem {

}

export interface ILayoutItem extends IFormItem {

}

export interface IActionItem extends IFormItem {

}

export interface IFormDefinition {
  inputItems: IInputItem[];
  actionItems: IActionItem[]
}

@Component({
  selector: 'app-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.css']
})
export class MaterialInputComponent {
  uiTypes = material_input_types;
}
