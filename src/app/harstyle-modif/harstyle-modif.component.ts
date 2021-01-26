import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HardstyleService } from '../services/hardstyle.service';

@Component({
  selector: 'app-harstyle-modif',
  templateUrl: './harstyle-modif.component.html',
  styleUrls: ['./harstyle-modif.component.css']
})
export class HarstyleModifComponent implements OnInit {
  hardstyle: any;

  constructor(
    private Hardstyle: HardstyleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.Hardstyle.getHardstyleById(id).subscribe(res => {
      this.hardstyle = res;
    })
  }

  onModif() {
    this.Hardstyle.modifHardstyle(this.hardstyle).subscribe(res => {
      this.router.navigate(['/hardstyles']);
    })
  }

}
