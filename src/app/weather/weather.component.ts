import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../weather-data.service';
import { COUNTRIES } from '../countries';
import { VALUE } from '../value';

declare var $: any;

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  cnty = COUNTRIES;
  val = VALUE;

  constructor(svc: WeatherDataService) {
  	for(let i=0; i<this.cnty.length; i++){
  		let x = this.cnty[i]["id"];
  		let y = this.cnty[i]["name"];
  		this.val[i] = svc.country_1(x,y,i);
  	}
  }

  ngOnInit() {
  }

  
}
