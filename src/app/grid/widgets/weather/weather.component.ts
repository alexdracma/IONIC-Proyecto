import { Component, Input, Output, EventEmitter, OnInit, AfterContentInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { WeatherResponse } from './interfaces/weather.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit, AfterContentInit {

  private _longitude: number = -0.376800
  private _latitude: number = 39.470242 
  private _product: string = 'civillight'
  private _output: string = 'json'
  private _url: string = 'http://www.7timer.info/bin/api.pl'
  private _weatherData: any[] = []
  
  @Input() editable: boolean;
  @Input() size: number[];
  
  @Output() delete = new EventEmitter();

  constructor(private httpClient: HttpClient) {
    this.getWeatherData() //get initial data with fixed position
  }

  ngOnInit(): void {
    this.getLocationService()
      .then((data) => {
        
        this._longitude = data.lon
        this._latitude = data.lat

        this.getWeatherData() //if user accepted location update weather data with their location
      })
      .catch(error => {
        console.warn(error)
      })
  }

  ngAfterContentInit(): void {
  }

  public get weatherData() {
    return [...this._weatherData]
  }

  askDeleteWidget() {
    this.delete.emit()
  }

  private getWeatherData() {
    const params = new HttpParams()
      .set('lon', this._longitude)
      .set('lat', this._latitude)
      .set('product', this._product)
      .set('output', this._output)
    
    this.httpClient.get<WeatherResponse>(this._url, { params })
      .subscribe((response: any) => {
        this._weatherData = response.dataseries;
        console.log(this._weatherData);
      })
  }
  
  private getLocationService(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({ lon: resp.coords.longitude, lat: resp.coords.latitude })
        reject({ lon: -0.376800, lat: 39.470242 })
      })
    })
  }

}
