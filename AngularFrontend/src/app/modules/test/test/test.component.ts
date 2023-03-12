import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService, WeatherForecast } from '../weather.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  public forecasts?: WeatherForecast[];
  public model?: any;

  constructor(http: HttpClient, service: WeatherService) {
    service.get().subscribe(result => {
      this.forecasts = result;
    });
  }
}

