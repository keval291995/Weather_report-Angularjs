import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../weather-data.service';
import { COUNTRIES } from '../countries';
import { Edata } from '../edata';
declare var $: any;

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})

export class ComparisonComponent implements OnInit {

  cnty_ = COUNTRIES;
  edata = Edata;

  constructor(adc: WeatherDataService) {
  	$(".loading").show();
  	for(let i=0; i<this.cnty_.length; i++){
  		let x = this.cnty_[i]["id"];
  		let y = this.cnty_[i]["name"];
  		this.edata[i] = adc.country_2(x,y,i);
  	}
  	$(".loading").delay(1000).fadeOut(100);
  }

  ngOnInit() {
  	var aby = this.edata;
  	$(document).ready(function(){
  		console.log(aby);
	  	var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
		    type: 'bar',
		    data: {
		        labels: ["India", "United Kindom", "United States", "Germany", "Australia", "Canada"],
		        datasets: [{
		            label: 'Temperature in °C',
		            data: [aby[0],aby[1],aby[2],aby[3],aby[4],aby[5]],
		            backgroundColor: [
		                'rgba(255, 99, 132)',
		                'rgba(54, 162, 235)',
		                'rgba(255, 206, 86)',
		                'rgba(75, 192, 192)',
		                'rgba(153, 102, 255)',
		                'rgba(255, 159, 64)'
		            ],
		            borderColor: [
		                'rgba(255,99,132)',
		                'rgba(54, 162, 235)',
		                'rgba(255, 206, 86)',
		                'rgba(75, 192, 192)',
		                'rgba(153, 102, 25)',
		                'rgba(255, 159, 64)'
		            ],
		            borderWidth: 1
		        }]
		    }
		});
	});
  }

}
