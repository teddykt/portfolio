import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-scatter-title',
  templateUrl: './scatter-title.component.html',
  styleUrls: ['./scatter-title.component.scss']
})
export class ScatterTitleComponent implements OnInit {

  @Input()
  content: string;
  
  @Input()
  time: number;

  letters: string[] = [];

  
  getChars(content) {
    for(var i = 0; i < content.length; i++) {
      var char = content.slice(i, i + 1);
      if (char == ' ') {
        char = '\xa0';
      }
      this.letters.push(char);
    }

    return this.letters;
  }

  scatter() {
    var random1 = (Math.random() * 2 - 1) * 20;
    var random2 = (Math.random() * 2 - 1) * 20;
    
    // const styles = {'top' : random1 + 'vh',
    //                 'left' : random2 + 'vw'
    //                 };
                    
    const styles = { 'transform' : 'translate(' + random1 + 'vw,' + random2 + 'vh)'};
    return styles;
  }
  constructor() { }

  ngOnInit() {
  var time = this.time;
  this.letters = this.getChars(this.content);    

    setTimeout(function(){ $('#' + time +' .scatter-letter').addClass('ani-scatter-sort')}, time * 1000);
  }

}
