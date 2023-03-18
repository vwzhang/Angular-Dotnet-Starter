import { Component, Input } from '@angular/core';
import { ILoadable } from '../dynamic-container/dynamic-container.component';

@Component({
  selector: 'app-widget-two',
  templateUrl: './widget-two.component.html',
  styleUrls: ['./widget-two.component.css']
})
export class WidgetTwoComponent implements ILoadable {
  @Input() title!: string;
}
