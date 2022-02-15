import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions } from 'swiper';
import {setsup, teamarr, GooglePartner} from './about-app.module';
@Component({

  selector: 'app-about-app',
  templateUrl: './about-app.page.html',
  styleUrls: ['./about-app.page.scss'],
})
export class AboutAppPage implements OnInit {

  constructor() { }
  // eslint-disable-next-line @typescript-eslint/member-ordering
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
  // eslint-disable-next-line @typescript-eslint/member-ordering
  setupArr: setsup[] = [
    {
      title: 'Proven-track Record',
      text: 'Logicserve brings over  a decade of core experience in handling Digital Media Communications for top  brands across domains.',
    },
    {
      title: 'Industry Accolades',
      // eslint-disable-next-line max-len
      text: 'We have won more than 85+ esteemed recognitions , consecutively in the last 2 years for our outstanding creativity &amp; campaign performance.',
    },
    {
      title: 'Holistic And Long-term View For Our Customers',
      // eslint-disable-next-line max-len
      text: 'At Logicserve, we believe that ‘underpinning your marketing strategy with the right technology’ is the key to ensure that your business is on track – today and well planned for tomorrow.',
    },
    {
      title: 'Young &amp; Passionate',
      text: 'We are proud to have a strong bench of digital marketing specialists which includes Platform Experts/ Media Specialists/ Data Analysts/ Senior Technology Practitioners',
    },
  ];
  teamArr: teamarr[] = [{
    imgUser: '../../assets/images/prasad-s.jpg',
    name: 'Prasad Shejale',
    desi: 'Founder & CEO',
    indipage: 'https://www.linkedin.com/feed/',
    linkin: 'https://www.linkedin.com/feed/',
  },
  {
    imgUser: '../../assets/images/rupak-v.jpg',
    name: 'Rupak Ved',
    desi: 'Chief Operating Officer',
    indipage: 'https://www.linkedin.com/feed/',
    linkin: 'https://www.linkedin.com/feed/',
  }];

  googlePartner : GooglePartner[] = [{
    logoImg:"",
    text:"Ads certified",
    title:"Google",
  },
  {
    logoImg:"../../assets/images/google-shpads.png",
    text:"Shopping Ads certified",
    title:"Google",
  },
  {
    logoImg:"../../assets/images/google-dispads.png",
    text:"Display Ads certified",
    title:"Google",
  },
  {
    logoImg:"../../assets/images/google-dispads.png",
    text:"Display Ads certified",
    title:"Google",
  },
  {
    logoImg:"../../assets/images/google-dispads.png",
    text:"Display Ads certified",
    title:"Google",
  }]

  ngOnInit() {
  }

}
