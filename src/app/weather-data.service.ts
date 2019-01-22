import { Injectable } from '@angular/core';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
	
	country_1(x,y,z){
  		var date, time, icon;
  		var appid;
  		var _coun1 = [];
		$.ajax({
	      type: "POST",
	      url: "http://api.openweathermap.org/data/2.5/weather?id="+x+"&units=metric&appid="+appid,
	      beforeSend: function() {
	      	$(".loading").show();
	      }
		}).done(function(response){
			var obj = {};
			var a = ["temp","humidity","pressure","date","time","icon","description","wind","id","name"];
	    	obj[a[0]] = response.main.temp;
	    	obj[a[1]] = response.main.humidity;
	    	obj[a[2]] = response.main.pressure;
	    	var dte = response.dt;
	    	var dt = new Date(dte*1000);
			var months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
			var year = dt.getFullYear();
			var month = months[dt.getMonth()];
			var dat = dt.getDate();
			obj[a[3]] = dat+ '/' + month + '/' + year;
	    	var t = response.dt;
	    	var dt = new Date(t*1000);
			var hr = dt.getHours();
			var m = "0" + dt.getMinutes();
			var s = "0" + dt.getSeconds();
			obj[a[4]] = hr+ ':' + m.substr(-2) + ':' + s.substr(-2);
	    	icon = response.weather[0].icon;
	    	obj[a[5]] = "http://openweathermap.org/img/w/"+icon+".png"
	    	obj[a[6]] = response.weather[0].description;
	    	obj[a[7]] = response.wind.speed;
	    	obj[a[8]] = x;
	    	obj[a[9]] = y;
	    	_coun1.push(obj);
  			$(".loading").delay(1000).fadeOut(100);
		}).fail(function( jqXHR, textStatus ) {
			  $(".loading").fadeOut(100);
			  if(z == 5){
			  	alert( "Request failed: " + textStatus + ". Contact: keval291995@gmail.com for appid" );
			  }
			});
		return _coun1;
	}

	country_2(x,y,z){
  		var ary;
  		var appid;
		$.ajax({
	      type: "POST",
	      async: false,
	      url: "http://api.openweathermap.org/data/2.5/weather?id="+x+"&units=metric&appid="+appid
		}).done(function(response){
	    	ary = response.main.temp;
		}).fail(function( jqXHR, textStatus ) {
			  $(".loading").fadeOut(100);
			  if(z == 5){
			  	alert( "Request failed: " + textStatus + ". Contact: keval291995@gmail.com for appid" );
			  }
		});
			return ary;
	}
	
	Unix_timestamp(t){
		var dt = new Date(t*1000);
		var hr = dt.getHours();
		var m = "0" + dt.getMinutes();
		var s = "0" + dt.getSeconds();
		return hr+ ':' + m.substr(-2) + ':' + s.substr(-2);  
	}
	Unix_date(t){
		var dt = new Date(t*1000);
		var months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
			var year = dt.getFullYear();
			var month = months[dt.getMonth()];
		var dat = dt.getDate();
		return dat+ '/' + month + '/' + year;  
	}

}
