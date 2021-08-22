import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PostWithComments } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent {
  post$: Observable<PostWithComments> = EMPTY;

  constructor(private route: ActivatedRoute, private posts: PostService) {
    this.post$ = this.route.params.pipe(
      switchMap(({ id }) => this.posts.one(id))
    );
  }
}
