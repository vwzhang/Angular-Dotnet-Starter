import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ILoadable } from '../dynamic-container/dynamic-container.component';

@Component({
  selector: 'app-widget-one',
  templateUrl: './widget-one.component.html',
  styleUrls: ['./widget-one.component.css']
})
export class WidgetOneComponent implements ILoadable, OnChanges {
  @Input() name!: string;

  ngOnChanges(changes: SimpleChanges) {
    console.log("Changes occured. ${changes}");
  }
}
