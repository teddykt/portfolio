import { Component, OnInit } from '@angular/core';
import '../../assets/js/slider.js';
import * as $ from 'jquery';

declare var slider: any;

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var mySlider = slider('.slides');
    
      $('.slides').addClass('slides visible');
      $('.slides').addClass('slides visible');
      $('.slides').removeClass('ani-title visible');
      $('.slides').removeClass('ani-underline visible');
  }

}
