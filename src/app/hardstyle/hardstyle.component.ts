import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  getSinger() {
    return this.hardstyleSinger;
  }

  getGenre() {
    return this.hardstyleGenre;
  }

  listenHarstyle() {
    console.log('Lecture de la musique ! OOOOLLLLLLLEEEEEEE');
  }

  changeColor() {
    if (this.hardstyleSinger == 'Ran D') {
      return 'blue';
    } else if (this.hardstyleSinger == 'Da Tweekaz') {
      return 'red';
    } else {
      console.log('ERROR');
    }
  }
}
