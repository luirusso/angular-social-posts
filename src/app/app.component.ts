import { Component } from '@angular/core';
import postsData from './posts.json'; //JSON INCLUSION

// DEFINING POST
interface Post {
  title: String,
  body: String,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'social-posts';

  posts: Post[] = postsData;
}
