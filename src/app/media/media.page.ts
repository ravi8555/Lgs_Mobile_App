import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-media',
  templateUrl: './media.page.html',
  styleUrls: ['./media.page.scss'],
})
export class MediaPage implements OnInit {
  // router: any;
  public categoryType: any;
  constructor(private router: Router) { }
  ngOnInit() {
    this.categoryType = ["HOME", "PPC", "SEO", "SMO", "PROGRAMMATIC", "DIGITAL ADVERTISING", "DIGITAL MARKETING", "NEWS", "CEO'S DESK",  "OTHERS"];
    // 

  }
  gotoIndivPage(item){
    console.log("click")
    // let item = {"data":"data"}
    let navigationExtras: NavigationExtras = item; 
    // this.router.navigate(['/data-inside',{ context:"{text:text}" }]);
    this.router.navigate(['/data-inside'], navigationExtras);
    // this.router.navigate();
  }
  showNews(cat){
    console.log("cat")
    console.log(cat)
  }

}
