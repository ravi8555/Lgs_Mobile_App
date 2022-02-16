import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
  public categoryType= ["HOME", "PPC", "SEO", "SMO", "PROGRAMMATIC", "DIGITAL ADVERTISING", "DIGITAL MARKETING", "NEWS", "CEO'S DESK",  "OTHERS"];
  constructor(private router: Router) { }

  ngOnInit() {
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
