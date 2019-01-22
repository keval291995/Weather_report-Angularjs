import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  var one = 1;
  var zero = 0;
  	$(document).ready(function(){    
	$(".toggle").click(function(){
		$(".open").toggle(function(){
			$(".bars").toggleClass("fa-bars",zero).toggleClass("fa-close",one);
			$('.full-height').toggleClass("styles");			
			$(".side-toggle").toggleClass("active");
      $(".loading").toggleClass("left_");
		});
	});
})
  }

}
