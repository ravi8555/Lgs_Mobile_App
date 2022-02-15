import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  public newsData: any;
  items: any[] = [];
  rotateImg = 0;
  
  constructor(public api: ApiService) {
    // for (let i = 0; i < 1000; i++) {
    //   this.items.push({
    //     name: i + ' - ' + images[rotateImg],
    //     imgSrc: getImgSrc(),
    //     avatarSrc: getImgSrc(),
    //     imgHeight: Math.floor(Math.random() * 50 + 150),
    //     content: lorem.substring(0, Math.random() * (lorem.length - 100) + 100)
    //   });

    //   rotateImg++;
    //   if (rotateImg === images.length) {
    //     rotateImg = 0;
    //   }
    // }
  
  }
    

  ngOnInit() {
    const self = this;
    this.api.getApi().subscribe((result) => {
      console.log('result');
      console.log(result.articles);
      self.newsData = result.articles
      // console.log(result['articles'])
      // this.newsData = result['articles'];
      // console.log(this.newsData);
    });
  }
  nexrNews(){
    let page = 1;


  }
}
