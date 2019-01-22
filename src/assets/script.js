var temp, humidity, pressure, date, time, icon, description, wind;
	var arr = [];
	$(document).ready(function(){    
		$(".toggle").click(function(){
			$(".open").toggle(function(){
				$(".bars").toggleClass("fa-bars",0).toggleClass("fa-close",1);
				$('.full-height').toggleClass("styles");			
				$(".side-toggle").toggleClass("active");
			});
		});
		country_1();
	})
	function country_1(){
		$.ajax({
          type: "POST",
          url: "http://api.openweathermap.org/data/2.5/weather?id=1261481&id=1277330&units=metric&appid=aded30dbbf688dde12db35c48527d9db",
          beforeSend: function() {
          	$(".loading").show();
          }
		}).done(function(response){
			console.log(response);
        	temp = response.main.temp;
        	arr.push(temp);
        	humidity = response.main.humidity;
        	pressure = response.main.pressure;
        	date = Unix_date(response.dt);
        	time = Unix_timestamp(response.dt);
        	icon = response.weather[0].icon;
        	description = response.weather[0].description;
        	wind = response.wind.speed;

        	$(".values1").html("<div class='top'><img class='icon' src='http://openweathermap.org/img/w/"+icon+".png'><h4 class='temp'>"+temp+"°C</h4><p><b>"+description+"</b></p><div class='dt'><p><i class='fa fa-calendar' aria-hidden='true'></i> "+date+"</p><p><i class='fa fa-clock-o' aria-hidden='true'></i> "+time+"</p></div></div><div class='parts'><div class='part'><p><b>Humidity</b></p><p>"+humidity+"%</p></div><div class='part'><p><b>Pressure</b></p><p>"+pressure+"pha</p></div><div class='part'><p><b>Wind</b></p><p>"+wind+"m/s</p></div></div>");
        	country_2();
		});
	}
	function country_2(){
		$.ajax({
          type: "POST",
          url: "http://api.openweathermap.org/data/2.5/weather?id=5815135&units=metric&appid=aded30dbbf688dde12db35c48527d9db"
		}).done(function(response){
			console.log(response);
        	temp = response.main.temp;
        	arr.push(temp);
        	humidity = response.main.humidity;
        	pressure = response.main.pressure;
        	date = Unix_date(response.dt);
        	time = Unix_timestamp(response.dt);
        	icon = response.weather[0].icon;
        	description = response.weather[0].description;
        	wind = response.wind.speed;

        	$(".values2").html("<div class='top'><img class='icon' src='http://openweathermap.org/img/w/"+icon+".png'><h4 class='temp'>"+temp+"°C</h4><p><b>"+description+"</b></p><div class='dt'><p><i class='fa fa-calendar' aria-hidden='true'></i> "+date+"</p><p><i class='fa fa-clock-o' aria-hidden='true'></i> "+time+"</p></div></div><div class='parts'><div class='part'><p><b>Humidity</b></p><p>"+humidity+"%</p></div><div class='part'><p><b>Pressure</b></p><p>"+pressure+"pha</p></div><div class='part'><p><b>Wind</b></p><p>"+wind+"m/s</p></div></div>");
		});
		country_3();
	}
	function country_3(){
		$.ajax({
          type: "POST",
          url: "http://api.openweathermap.org/data/2.5/weather?id=2643743&units=metric&appid=aded30dbbf688dde12db35c48527d9db"
		}).done(function(response){
			console.log(response);
        	temp = response.main.temp;
        	arr.push(temp);
        	humidity = response.main.humidity;
        	pressure = response.main.pressure;
        	date = Unix_date(response.dt);
        	time = Unix_timestamp(response.dt);
        	icon = response.weather[0].icon;
        	description = response.weather[0].description;
        	wind = response.wind.speed;

        	$(".values3").html("<div class='top'><img class='icon' src='http://openweathermap.org/img/w/"+icon+".png'><h4 class='temp'>"+temp+"°C</h4><p><b>"+description+"</b></p><div class='dt'><p><i class='fa fa-calendar' aria-hidden='true'></i> "+date+"</p><p><i class='fa fa-clock-o' aria-hidden='true'></i> "+time+"</p></div></div><div class='parts'><div class='part'><p><b>Humidity</b></p><p>"+humidity+"%</p></div><div class='part'><p><b>Pressure</b></p><p>"+pressure+"pha</p></div><div class='part'><p><b>Wind</b></p><p>"+wind+"m/s</p></div></div>");
        country_4();
		});
	}
	function country_4(){
		$.ajax({
          type: "POST",
          url: "http://api.openweathermap.org/data/2.5/weather?id=2950159&units=metric&appid=aded30dbbf688dde12db35c48527d9db"
		}).done(function(response){
			console.log(response);
        	temp = response.main.temp;
        	arr.push(temp);
        	humidity = response.main.humidity;
        	pressure = response.main.pressure;
        	date = Unix_date(response.dt);
        	time = Unix_timestamp(response.dt);
        	icon = response.weather[0].icon;
        	description = response.weather[0].description;
        	wind = response.wind.speed;

        	$(".values4").html("<div class='top'><img class='icon' src='http://openweathermap.org/img/w/"+icon+".png'><h4 class='temp'>"+temp+"°C</h4><p><b>"+description+"</b></p><div class='dt'><p><i class='fa fa-calendar' aria-hidden='true'></i> "+date+"</p><p><i class='fa fa-clock-o' aria-hidden='true'></i> "+time+"</p></div></div><div class='parts'><div class='part'><p><b>Humidity</b></p><p>"+humidity+"%</p></div><div class='part'><p><b>Pressure</b></p><p>"+pressure+"pha</p></div><div class='part'><p><b>Wind</b></p><p>"+wind+"m/s</p></div></div>");
        country_5();
		});
	}
	function country_5(){
		$.ajax({
          type: "POST",
          url: "http://api.openweathermap.org/data/2.5/weather?id=6354908&units=metric&appid=aded30dbbf688dde12db35c48527d9db"
		}).done(function(response){
			console.log(response);
        	temp = response.main.temp;
        	arr.push(temp);
        	humidity = response.main.humidity;
        	pressure = response.main.pressure;
        	date = Unix_date(response.dt);
        	time = Unix_timestamp(response.dt);
        	icon = response.weather[0].icon;
        	description = response.weather[0].description;
        	wind = response.wind.speed;

        	$(".values5").html("<div class='top'><img class='icon' src='http://openweathermap.org/img/w/"+icon+".png'><h4 class='temp'>"+temp+"°C</h4><p><b>"+description+"</b></p><div class='dt'><p><i class='fa fa-calendar' aria-hidden='true'></i> "+date+"</p><p><i class='fa fa-clock-o' aria-hidden='true'></i> "+time+"</p></div></div><div class='parts'><div class='part'><p><b>Humidity</b></p><p>"+humidity+"%</p></div><div class='part'><p><b>Pressure</b></p><p>"+pressure+"pha</p></div><div class='part'><p><b>Wind</b></p><p>"+wind+"m/s</p></div></div>");
        country_6();
		});
	}
	function country_6(){
		$.ajax({
          type: "POST",
          url: "http://api.openweathermap.org/data/2.5/weather?id=4905006&units=metric&appid=aded30dbbf688dde12db35c48527d9db"
		}).done(function(response){
			console.log(response);
        	temp = response.main.temp;
        	arr.push(temp);
        	humidity = response.main.humidity;
        	pressure = response.main.pressure;
        	date = Unix_date(response.dt);
        	time = Unix_timestamp(response.dt);
        	icon = response.weather[0].icon;
        	description = response.weather[0].description;
        	wind = response.wind.speed;

        	$(".values6").html("<div class='top'><img class='icon' src='http://openweathermap.org/img/w/"+icon+".png'><h4 class='temp'>"+temp+"°C</h4><p><b>"+description+"</b></p><div class='dt'><p><i class='fa fa-calendar' aria-hidden='true'></i> "+date+"</p><p><i class='fa fa-clock-o' aria-hidden='true'></i> "+time+"</p></div></div><div class='parts'><div class='part'><p><b>Humidity</b></p><p>"+humidity+"%</p></div><div class='part'><p><b>Pressure</b></p><p>"+pressure+"pha</p></div><div class='part'><p><b>Wind</b></p><p>"+wind+"m/s</p></div></div>");

        	var ctx = document.getElementById("myChart");
        	var myChart = new Chart(ctx, {
			    type: 'bar',
			    data: {
			        labels: ["India", "United Kindom", "United States", "Germany", "Australia", "Canada"],
			        datasets: [{
			            label: 'Temperature in °C',
			            data: [arr[0],arr[1],arr[2],arr[3],arr[4],arr[5]],
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
        	$(".loading").hide();
		});
	}
	function Unix_timestamp(t)
	{
		var dt = new Date(t*1000);
		var hr = dt.getHours();
		var m = "0" + dt.getMinutes();
		var s = "0" + dt.getSeconds();
		return hr+ ':' + m.substr(-2) + ':' + s.substr(-2);  
	}
	function Unix_date(t)
	{
		var dt = new Date(t*1000);
		var months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
  		var year = dt.getFullYear();
  		var month = months[dt.getMonth()];
		var dat = dt.getDate();
		return dat+ '/' + month + '/' + year;  
	}