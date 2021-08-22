import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../../post-api/post';
import { PostApiService } from '../../../post-api/post-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private postApi: PostApiService) {
    this.posts$ = this.postApi.all();
  }

  ngOnInit(): void {}
}
