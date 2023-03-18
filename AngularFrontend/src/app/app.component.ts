import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ComponentDef } from './dynamic-container/dynamic-container.component';
import { WidgetOneComponent } from './widget-one/widget-one.component';
import { WidgetTwoComponent } from './widget-two/widget-two.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public forecasts?: WeatherForecast[];
  public model?: any;
  componentDef!: ComponentDef;

  loadWidgetOne() {
    this.componentDef = {
      component: WidgetOneComponent,
      inputs: { name: 'Rose Cheng'}
    };
  }

  loadWidgetTwo() {
    this.componentDef = {
      component: WidgetTwoComponent,
      inputs: { title: 'Angular 15 Getting Started' }
    };
  }

  constructor(http: HttpClient) {
    http.get<WeatherForecast[]>('/weatherforecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  //  http.get('/uiModel').subscribe(result => {
  //    this.model = result;
  //  }, error => console.error(error));
  }

  title = 'AngularFrontend';
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
