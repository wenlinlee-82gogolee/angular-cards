import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      username: 'nature',
      imageUrl: 'assets/tree.jpeg',
      content: 'I saw this awesome tree duriing my hike today',
    },
    {
      title: 'Snowy Mountain',
      username: 'mountainlover',
      imageUrl: 'assets/mountain.jpeg',
      content: 'Here is a picture of a snowy mountain',
    },
    {
      title: 'Mountain Biking',
      username: 'bikingrock',
      imageUrl: 'assets/biking.jpeg',
      content: 'I did some biking today',
    },
    {
      title: 'Mountain Biking',
      username: 'bikingrock',
      imageUrl: 'assets/biking.jpeg',
      content: 'I did some biking today',
    },
  ];
}
