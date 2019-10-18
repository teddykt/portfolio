import { Component, OnInit } from '@angular/core';
import '../../assets/js/slider.js';
declare var slider: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var mySlider = slider('deslide');
  }

}
