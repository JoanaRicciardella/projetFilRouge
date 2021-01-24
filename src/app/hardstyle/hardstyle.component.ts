import { Component, Input, OnInit } from '@angular/core';
import { HardstyleService } from '../services/hardstyle.service';

@Component({
  selector: 'app-hardstyle',
  templateUrl: './hardstyle.component.html',
  styleUrls: ['./hardstyle.component.css']
})
export class HardstyleComponent implements OnInit {

  @Input() hardstyleName: string;
  @Input() hardstyleSinger: string;
  @Input() hardstylePicture: string;
  @Input() hardstyleGenre: string;
  @Input() index: number;
  @Input() id:string;

  constructor(
    private Hardstyle: HardstyleService
  ) { }

  ngOnInit() {
  }

  getSinger() {
    return this.hardstyleSinger;
  }

  getGenre() {
    return this.hardstyleGenre;
  }

  changeColor() {
    if (this.hardstyleSinger == 'Ran D') {
      return 'green';
    } else if (this.hardstyleSinger == 'Da Tweekaz') {
      return 'red';
    } else {
      console.log('ERROR');
    }
  }

  removeHardstyle(id: any) {
    this.Hardstyle.deleteHardstyle(id);
  }

  
}
