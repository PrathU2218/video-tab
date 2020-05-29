import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Reference } from '@angular/compiler/src/render3/r3_ast';
@Component({
  selector: 'app-video-tab',
  templateUrl: './video-tab.component.html',
  styleUrls: ['./video-tab.component.css']
})
export class VideoTabComponent implements OnInit {

   current_video: Video={
    video: "video.mp4",
    title: "title",
    upvotes: 1400,
    downvotes: 3,
    upnext: [
      {title: "title",
    upvotes: 2000,
    downvotes: 34,
    video: null,
    creator: "danish",
    references: null,
    comments: null,
    upnext: null,
    thumbnail: "assets/images/user-1.jpg"
  },
  {title: "title",
  upvotes: 2000,
  downvotes: 4,
  video: null,
  creator: "danish",
  references: null,
  comments: null,
  upnext: null,
  thumbnail: "assets/images/user-1.jpg"
},
{title: "title",
upvotes: 2000,
downvotes: 37,
video: null,
creator: "danish",
references: null,
comments: null,
upnext: null,
thumbnail: "assets/images/user-1.jpg"
},

{title: "title",
upvotes: 2000,
downvotes: 34,
video: null,
creator: "danish",
references: null,
comments: null,
upnext: null,
thumbnail: "assets/images/user-1.jpg"
},
{title: "title",
upvotes: 2000,
downvotes: 34,
video: null,
creator: "danish",
references: null,
comments: null,
upnext: null,
thumbnail: "assets/images/user-1.jpg"
},
    ],
    creator: "danish",
    references:[
      "1st Reference",
      "2nd reference"
    ],
    thumbnail: "assets/images/user-1.jpg",
    comments: [
      {poster: "danish",
      comment: "this is the first comment",
      replies:[{
        poster: "danish",
        comment: "this is the first reply",
        replies: null

      }]
    }
    ]
   
  }

  constructor() { }

  ngOnInit(): void {
    
  }
  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
  isPlay: boolean = false;
  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }
}
class Video{
  video: String;
  title: String;
  upvotes: number;
  downvotes: number;
  upnext: Video[];
  creator: String;
  references: String[];
  comments: Comment[];
  thumbnail: String;
}
class Comment{
  poster: String;
  comment: String;
  replies: Comment[];
}