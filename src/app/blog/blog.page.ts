import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Blog } from "./blog.module";
// import {  } from "";
@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
  public categoryType= ["HOME", "PPC", "SEO", "SMO", "PROGRAMMATIC", "DIGITAL ADVERTISING", "DIGITAL MARKETING", "NEWS", "CEO'S DESK",  "OTHERS"];
  constructor(private router: Router) { }
  type : any= "HOME";
  blogs : any = [
    {
      img:"https://www.logicserve.com/blog/wp-content/uploads/2022/01/Blog_Post_31thjan-807x422.jpg",
      link:"https://www.logicserve.com/blog/what-makes-a-youtube-video-successful-watch-out-for-these-13-elements/",
      type:"HOME",
      title:"What Makes a YouTube Video Successful? Watch Out for These 13 Elements",
      subtitle:"Proper video marketing can help boost conversions and sales. Improve your performance with these 13 elements of successful YouTube videos.",
      types:[{category:"HOME"},{category:"NEWS"}]
    },
    {
      img:"https://www.logicserve.com/blog/wp-content/uploads/2022/02/Banner-75.jpg",
      link:"https://www.logicserve.com/blog/weekend-digital-media-round-up-googles-business-profiles-api-youtubes-shorts-shelf-twitters-integration-with-paytm-more/",
      type:"NEWS",
      title:"Business Profiles API, YouTube’s Shorts Shelf, Twitter’s Integration with Paytm & more…",
      subtitle:"Logicserve Digital brings to you a curated round-up of important digital marketing updates this week. For further queries, you can write to us at newsbulletin@logicserve.com",
      types:[{category:"HOME"},{category:"NEWS"}]

    },
    {
      img:"https://www.logicserve.com/blog/wp-content/uploads/2022/01/Blog_Post_31thjan-807x422.jpg",
      link:"https://www.logicserve.com/blog/what-makes-a-youtube-video-successful-watch-out-for-these-13-elements/",
      type:"PPC",
      title:"What Makes a YouTube Video Successful? Watch Out for These 13 Elements",
      subtitle:"Proper video marketing can help boost conversions and sales. Improve your performance with these 13 elements of successful YouTube videos.",
      types:[{category:"HOME"},{category:"NEWS"}]

    },
    {
      img:"https://www.logicserve.com/blog/wp-content/uploads/2022/01/Blog_Post_31thjan-807x422.jpg",
      link:"https://www.logicserve.com/blog/what-makes-a-youtube-video-successful-watch-out-for-these-13-elements/",
      type:"HOME",
      title:"What Makes a YouTube Video Successful? Watch Out for These 13 Elements",
      subtitle:"Proper video marketing can help boost conversions and sales. Improve your performance with these 13 elements of successful YouTube videos.",
      types:[{category:"HOME"},{category:"NEWS"}]

    },
    {
      img:"https://www.logicserve.com/blog/wp-content/uploads/2022/01/Blog_Post_31thjan-807x422.jpg",
      link:"https://www.logicserve.com/blog/what-makes-a-youtube-video-successful-watch-out-for-these-13-elements/",
      type:"HOME",
      title:"What Makes a YouTube Video Successful? Watch Out for These 13 Elements",
      subtitle:"Proper video marketing can help boost conversions and sales. Improve your performance with these 13 elements of successful YouTube videos.",
      types:[{category:"HOME"},{category:"NEWS"}]

    },
]
  displayBlog: Blog[] = this.blogs;
  ngOnInit() {
    
  }

  
  showNews(cat){
    console.log(this)
    console.log("cat")
    console.log(cat)
    this.type = cat;
    // console.log($(cat-btn))
    // result = data.filter(o => Object.keys(filterBy).every(k => filterBy[k].some(f => o[k] === f)));

    // this.displayBlog = this.blogs.filter(i => Object.keys(filterBy)  )

    this.displayBlog = this.blogs.filter(i => i.type === cat)

    // this.displayBlog = this.blogs.filter(i =>{
    //   i.type === cat;
    //   // for(let IndivCt of i.types){
    //   //   console.log(IndivCt)
      

    //   // }
    //   // console.log(i.types)
    //   // i.types.filter(innerCat=>{
    //   //   console.log(innerCat)
    //   //   innerCat.category === cat
    //   // } )
    // } )
  }
}
