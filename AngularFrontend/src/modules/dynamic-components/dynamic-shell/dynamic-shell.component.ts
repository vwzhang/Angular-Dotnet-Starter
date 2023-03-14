import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-shell',
  templateUrl: './dynamic-shell.component.html',
  styleUrls: ['./dynamic-shell.component.css']
})
export class DynamicShellComponent {
  navList: string[] = [ "Homw", "View", "About"];
}
