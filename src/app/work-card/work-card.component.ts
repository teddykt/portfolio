import { Component, OnInit, Input, HostBinding } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.scss'],
})
export class WorkCardComponent implements OnInit {


  @Input()
  workName: string;

  id: string;
  name: string;
  image1Path: string;
  image2Path: string;

  constructor() {
  }

  ngOnInit() {

    // Title Name 
    if (this.workName == 'gatorade') {
      this.name = 'Gatorade Gear';
      this.id = '1';
    }
    
    else if (this.workName == 'refreshingly') {
      this.name = 'Refreshingly Rewarding';
      this.id = '2';
    }
    else if (this.workName == 'budweiser') {
      this.name = 'Budweiser Contest';
      this.id = '3';
    }
    else if (this.workName == 'circlek') {
      this.name = 'CircleK Doritos';
      this.id = '4';
    }
    else if (this.workName == 'odacc') {
      this.name = 'ODACC';
      this.id = '5';
    }
    else if (this.workName == 'deskyar') {
      this.name = 'deskyar';
      this.id = '6';
    }
    else {
      this.name = 'wat';
      this.id = '10';
    }

    // images 
    // this.image1Path = '../../assets/img/work/' + this.workName + '1.png';
    // this.image2Path = '../../assets/img/work/' + this.workName + '2.png';
    this.image1Path = '../../assets/img/work/gatorade1.png';
    this.image2Path = '../../assets/img/work/gatorade2.png';

    $('.' + this. workName + ' .work-card-container .work-card--img1').addClass('work-card--img__' + this.workName + 1 + ' work-card--img__' + this.workName);
    $('.' + this. workName + ' .work-card-container .work-card--img2').addClass('work-card--img__' + this.workName + 2 + ' work-card--img__' + this.workName);

    
    // for title animation for slider.js 
    $('.' + this. workName + ' .work-card-container .work-card--title').attr('id', 'workTitle' + this.id);

    // for title underline for slider.js 
    $('.' + this. workName + ' .work-title-underline').addClass('work-title-underline__' + this.workName);
    $('.' + this. workName + ' .work-title-underline').attr('id', 'ul' + this.id);

    // for initial page 
    if  (this.id == '1') {
      document.getElementById('workTitle1').classList.add('fromBottom', 'visible');
      setTimeout(function(){ $('#ul1').addClass('fromLeft-nb visible')}, 1400);
    }
  }

}
