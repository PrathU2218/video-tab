import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideoTabComponent } from './video-tab/video-tab.component';
import { ProfileTabComponent } from './profile-tab/profile-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoTabComponent,
    ProfileTabComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
