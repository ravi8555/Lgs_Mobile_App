import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import SwiperCore, { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute) { }
  slideBlog = {
    initialSlide: 0,
    slidesPerView: 1.5,
    speed: 400,
    pagination:false,
  }
  Spotlight = [{
    userImg:"../../assets/images/spotlight-rt-1.jpg",
    awardImg:"../../assets/images/spotlight-rt-1.jpg",
    content:"Our Founder &amp; CEO, Prasad Shejale was featured in <b>‘Impact Digital Power 100 2020: Digital Leaders.’</b>",
  }]
  config: SwiperOptions = {
    slidesPerView: 1.2,
    spaceBetween: 0,
    navigation: false,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
