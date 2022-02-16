import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Blog', url: '/blog', icon: 'reader' },
    { title: 'About us', url: '/about-app', icon: 'people' },
    { title: 'News', url: '/news', icon: 'newspaper' },
    { title: 'Webinar', url: '/webinar', icon: 'play' },
    
    // { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
    // { title: 'Home', url: '/folder/Spam', icon: 'warning' },
  ];
  public SocialLinks = [
    { name: 'Facebook', link: 'https://www.facebook.com/LogicserveDigital', icon:'logo-facebook' },
    { name: 'Instagram', link: 'https://www.instagram.com/logicserve_digital/', icon:'logo-instagram' },
    { name: 'Linkedin', link: 'https://www.linkedin.com/company/logicserve-digital/', icon:'logo-linkedin' },
    { name: 'Twitter', link: 'https://twitter.com/logic_digital', icon:'logo-twitter' },
    { name: 'Youtube', link: 'https://www.youtube.com/channel/UCiBHAWPs7eWDvtY0070XySg', icon:'logo-youtube' },
  ];
  constructor() {}
}
