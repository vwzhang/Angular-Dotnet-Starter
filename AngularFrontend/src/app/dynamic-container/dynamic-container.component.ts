import { Component, Input, ViewChild, ViewContainerRef, Type } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WidgetOneComponent } from '../widget-one/widget-one.component';
import { WidgetTwoComponent } from '../widget-two/widget-two.component';

const componentDefinitions = [
  {
    component: () => import('../widget-one/widget-one.component').then(it => it.WidgetOneComponent),
    inputs: { name: 'Victor Zhang' }
  },
  {
    component: () => import('../widget-two/widget-two.component').then(it => it.WidgetTwoComponent),
    inputs: { title: 'Learn Dynamic Component' }
  }
];

export class ComponentDef {
  component!: Type<any>;
  inputs!: object;
}

@Component({
  selector: 'app-dynamic-container',
  templateUrl: './dynamic-container.component.html',
  styleUrls: ['./dynamic-container.component.css']
})
export class DynamicContainerComponent {
  constructor(private dialog: MatDialog) { }
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
  @Input() set componentDef(def: ComponentDef) {
    this.container.clear();
    var comp = this.container.createComponent(def.component);
    Object.entries(def.inputs).forEach(([key, value]) => {
      comp.setInput(key, value);
    });
  };

  openDialog(): void {
    const component: Type<any> = WidgetOneComponent;
    const dialogRef = this.dialog.open(component);
  }

  loadComponents() {
    var widget1 = this.container.createComponent(WidgetOneComponent);
    widget1.setInput("name", "Victor Zhang");
    var widget2 = this.container.createComponent(WidgetTwoComponent);
    widget2.setInput("title", "Learn Angular Dynamic Components");
  }

  loadComponentsByDefinitions() {
    componentDefinitions.forEach(async (def) => {
      const comp = await def.component();
      const inst = this.container.createComponent<ILoadable>(comp);

      Object.entries(def.inputs).forEach(([key, value]) => {
        inst.setInput(key, value);
      });
    });
  }

  clearContainer() {
    this.container.clear();
  }
}

export interface ILoadable { }

