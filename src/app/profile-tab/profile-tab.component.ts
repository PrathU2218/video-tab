import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-tab',
  templateUrl: './profile-tab.component.html',
  styleUrls: ['./profile-tab.component.css']
})
export class ProfileTabComponent implements OnInit {

  user: User ={profile_image: ""}

  constructor() { }

  ngOnInit(): void {
  }

}
class User{
  profile_image: String;
}
