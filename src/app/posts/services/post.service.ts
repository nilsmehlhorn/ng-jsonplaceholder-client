import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommentApiService } from '../../comment-api/comment-api.service';
import { PostApiService } from '../../post-api/post-api.service';
import { PostWithComments } from '../models/post';

@Injectable()
export class PostService {
  constructor(
    private postApi: PostApiService,
    private commentApi: CommentApiService
  ) {}

  one(postId: number): Observable<PostWithComments> {
    return forkJoin([
      this.postApi.one(postId),
      this.commentApi.byPost(postId),
    ]).pipe(map(([post, comments]) => ({ ...post, comments })));
  }
}
