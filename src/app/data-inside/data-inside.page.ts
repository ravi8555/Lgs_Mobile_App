import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-data-inside',
  templateUrl: './data-inside.page.html',
  styleUrls: ['./data-inside.page.scss'],
})
export class DataInsidePage implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    console.log("this.route.snapshot")

    console.log(this.route)
    if (this.router.getCurrentNavigation()) {
      console.log(this.router.getCurrentNavigation().extras);
    }
  }

}
