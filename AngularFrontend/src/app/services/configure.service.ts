import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigureService {
  weatherUrl = 'weather'

  constructor(private http: HttpClient) { }
  getWeatherForecast(): any {
    return this.http.get("");
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

interface WeatherForecastDetail extends WeatherForecast {
  details: string;
}
