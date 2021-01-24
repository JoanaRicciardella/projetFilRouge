import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HardstyleService } from '../services/hardstyle.service';

@Component({
  selector: 'app-harstyle-list',
  templateUrl: './harstyle-list.component.html',
  styleUrls: ['./harstyle-list.component.css']
})
export class HarstyleListComponent implements OnInit {
  title = 'Hardstyle';
  hardstyles:any =[];

  hardstyleSubscription: Subscription;

  constructor(
    private Hardstyle: HardstyleService
  ) { }

  ngOnInit() {
    this.hardstyleSubscription = this.Hardstyle.hardstyleSubject.subscribe((listHarstyle) =>{
      this.hardstyles = listHarstyle
    });
    this.Hardstyle.emitHardstyleSubject();
  }

  ngOnDestroy() {
    this.hardstyleSubscription.unsubscribe();
  }


}
