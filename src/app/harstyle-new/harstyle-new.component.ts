import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardstyleService } from '../services/hardstyle.service';

@Component({
  selector: 'app-harstyle-new',
  templateUrl: './harstyle-new.component.html',
  styleUrls: ['./harstyle-new.component.css']
})
export class HarstyleNewComponent implements OnInit {

  newHardstyle: any;

  constructor(
    private Hardstyle: HardstyleService,
    private router: Router
  ) { }

  ngOnInit() {
    this.newHardstyle = {
      name: null,
      singer: null,
      picture: null,
      genre: null
    };
  }


  onSaveHardstyle() {
    console.log('New Hardstyle' , this.newHardstyle);
    this.Hardstyle.addHardstyle(this.newHardstyle);
    this.router.navigate(['/hardstyles']);
  }

}
