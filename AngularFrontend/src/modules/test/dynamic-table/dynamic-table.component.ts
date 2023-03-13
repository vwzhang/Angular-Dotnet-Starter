import { Component } from '@angular/core';

const USER_DATA = [
  { "id": 1, "name": "John Smith", "occupation": "Advisor", "dateOfBirth": "1984-05-05", "age": 36 },
  { "id": 2, "name": "Muhi Masri", "occupation": "Developer", "dateOfBirth": "1992-02-02", "age": 28 },
  { "id": 3, "name": "Peter Adams", "occupation": "HR", "dateOfBirth": "2000-01-01", "age": 20 },
  { "id": 4, "name": "Lora Bay", "occupation": "Marketing", "dateOfBirth": "1977-03-03", "age": 43 },
]

const COLUMNS_SCHEMA = [
  {
    key: "name",
    type: "text",
    label: "Full Name"
  },
  {
    key: "occupation",
    type: "text",
    label: "Occupation"
  },
  {
    key: "dateOfBirth",
    type: "date",
    label: "Date of Birth"
  },
  {
    key: "age",
    type: "number",
    label: "Age"
  },
  {
    key: "isEdit",
    type: "isEdit",
    label: ""
  }
];

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent {
  displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);
  dataSource: any = USER_DATA;
  columnsSchema: any = COLUMNS_SCHEMA;

  addRow() {
    const newRow = { "name": "", "occupation": "", "datOfBirth": "", "age": 0, isEdit: true };
    this.dataSource = [...this.dataSource, newRow];

  }

  removeRow(id: number) {
    this.dataSource = this.dataSource.filter((u: any) => u.id !== id);
  }
}
