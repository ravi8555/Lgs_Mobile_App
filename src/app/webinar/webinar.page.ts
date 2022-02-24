import { Component, OnInit } from '@angular/core';
import {webinar} from './webinar.module';
@Component({
  selector: 'app-webinar',
  templateUrl: './webinar.page.html',
  styleUrls: ['./webinar.page.scss'],
})
export class WebinarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Webinars: webinar[] = [
    {
      title: 'Google Campaign Manager - Integration for Enhanced Audience Profiling',
      link: 'https://www.logicserve.com/pdf/logicserve-masterclass-google-campaign-manager.pdf',
      img:"./../../assets/images/webinar1.png"
    },
    {
      title: 'Adobe Ecosystem - Using Adobe Products to Build Seamless MarTech Capability',
      link: 'https://www.logicserve.com/pdf/logicserve-masterclass-adobe-ecosytem.pdf',
      img:"./../../assets/images/webinar2.png"
    },
    {
      title: 'Snackable Content: Breaking the Content Clutter in a Lockdown Scenario',
      link: 'https://www.logicserve.com/pdf/logicserve-masterclass-snackable-content-presentation.pdf',
      img:"./../../assets/images/webinar3.png"
    },
    {
      title: 'Enhancing User Experience with Accelerated Mobile Pages &amp; Progressive Web App',
      link: 'https://www.logicserve.com/pdf/logicserve-masterclass-enhacing-ux-with-amp-pwa.pdf',
      img:"./../../assets/images/webinar4.png"
    },
    {
      title: 'Transforming for the New Normal',
      link: 'https://www.logicserve.com/pdf/logicserve-masterclass-transforming-for-the-new-normal.pdf',
      img:"./../../assets/images/webinar5.png"
    },
    {
      title: 'Be An Analytics Pro - A peek into Advanced Analytics',
      link: 'https://www.logicserve.com/pdf/logicserve-masterclass-ga.pdf',
      img:"./../../assets/images/webinar6.png"
    },
    {
      title: 'Explore the World of GMP with Use Cases &amp; Case - Studies',
      link: 'https://www.logicserve.com/pdf/logicserve-masterclass-gmp.pdf',
      img:"./../../assets/images/webinar7.png"
    },
  ]
}
