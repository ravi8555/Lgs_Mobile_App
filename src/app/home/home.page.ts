import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'node_modules/swiper/angular/swiper-angular';
import SwiperCore, { SwiperOptions } from 'swiper';
import { ApiService } from '../api.service';
import { Sportlight, Awards } from './home.module';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('swiperSpotlight') swiper?: SwiperComponent;
  public newsData: any;

  Spotlight: Sportlight[] = [
    {
      userImg: '../../assets/images/spotlight-rt-1.jpg',
      awardImg: '../../assets/images/spotlight-lt-1.jpg',
      content:
        "Our Founder &amp; CEO, Prasad Shejale was featured in <b>'Impact Digital Power 100 2020: Digital Leaders.'</b>",
    },
    {
      userImg: '../../assets/images/spotlight-rt-2.jpg',
      awardImg: '../../assets/images/spotlight-lt-2.jpg',
      content:
        "Our Founder &amp; CEO, Prasad Shejale was featured in <b>‘Impact Digital Power 100 2020: Digital Leaders.'</b>",
    },
    {
      userImg: '../../assets/images/spotlight-rt-1.jpg',
      awardImg: '../../assets/images/spotlight-lt-3.jpg',
      content:
        "Our Founder &amp; CEO, Prasad Shejale was featured in Adgully's <b>'Powerful Influencers'</b> of 2020",
    },
    {
      userImg: '../../assets/images/spotlight-rt-5.jpg',
      awardImg: '../../assets/images/spotlight-lt-5.jpg',
      content:
        "Heartiest Congratulations to Ashish Chandoke, Associate VP, Media Solutions for Winning <b>Voot India's Best Marketers &amp; Media Planners</b> at <b>Social Samosa</b>",
    },
    {
      userImg: '../../assets/images/spotlight-rt-6.jpg',
      awardImg: '../../assets/images/spotlight-lt-6.jpg',
      content:
        'Congratulations to Vaishali Mishra , our Copy Supervisor for Winning the <b>Excellence Award</b> at <b>e4m Indian Content Marketing Awards',
    },
    {
      userImg: '../../assets/images/spotlight-rt-3.png',
      awardImg: '../../assets/images/spotlight-lt-4.jpg',
      content:
        'Our Senior Creative Director, Dipshika Ravi was featured in Social Samosa’s <b>Social Media Superwomen</b> for 2021',
    },
    // {
    //   userImg: '../../assets/images/spotlight-rt-3.png',
    //   awardImg: '../../assets/images/spotlight-lt-4.jpg',
    //   content:
    //     "Our Senior Creative Director, Dipshika Ravi was featured in Social Samosa’s <b>Social Media Superwomen</b> for 2021",
    // },
  ];
  awardsArr: Awards[] = [
    {
      awardImg: '../../assets/images/award-1.jpg',
      orgImg: '../../assets/images/award-51.jpg',
      content:
        'Logicserve Digital won four awards at <b>Drivers of Digital Awards 2019</b>',
    },
    {
      awardImg: '../../assets/images/award-3.jpg',
      orgImg: '../../assets/images/award-61.jpg',
      content:
        'Logicserve Digital won two Silver awards at <b>SAMMIE Best Social Media Brands Powered by Social Samosa</b>',
    },
    {
      awardImg: '../../assets/images/award-1.jpg',
      orgImg: '../../assets/images/award-11.jpg',
      content:
        'Logicserve Digital won two Gold awards at <b>Inkspell Media’s Drivers of Digital Awards 2021</b>',
    },
    {
      awardImg: '../../assets/images/award-2.jpg',
      orgImg: '../../assets/images/award-21.jpg',
      content:
        'Logicserve Digital won two Silver awards at <b>SAMMIE Best Social Media Brands Powered by Social Samosa</b>',
    },
    {
      awardImg: '../../assets/images/award-4.jpg',
      orgImg: '../../assets/images/award-31.jpg',
      content:
        'Logicserve Digital won five awards for <b>Media &amp; Creative Excellence at Digixx Awards 2020</b>',
    },
    {
      awardImg: '../../assets/images/award-3.jpg',
      orgImg: '../../assets/images/award-41.jpg',
      content:
        'Logicserve Digital won award for <b>Best Performance Marketing Campaign Non-Metro at E4M Play 2020</b>',
    },
  ];
  config: SwiperOptions = {
    slidesPerView: 1.2,
    spaceBetween: 0,
    navigation: false,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    // loop:true,
    // initialSlide: 0,
    autoplay: true,
  };
  onSwiper(swiper) {
    // console.log(swiper);
  }
  onSlideChange() {
    // console.log('slide change');
  }

  constructor(public api: ApiService) {}

  ngOnInit() {
    // this.api.getApi().subscribe((result) => {
    //   console.log('result');
    //   console.log(result);
    //   // console.log(result['articles'])
    //   this.newsData = result['articles'];
    //   console.log(this.newsData);
    // });
  }
}
