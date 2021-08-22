import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, forkJoin, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { PostApiService } from '../../../post-api/post-api.service';
import { UserApiService } from '../../../user-api/user-api.service';
import { UserWithPosts } from '../../models/user-with-posts';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  user$: Observable<UserWithPosts> = EMPTY;

  constructor(
    private route: ActivatedRoute,
    private userApi: UserApiService,
    private postApi: PostApiService
  ) {
    this.user$ = this.route.params.pipe(
      switchMap(({ userId }) =>
        forkJoin([this.userApi.one(userId), this.postApi.byUser(userId)])
      ),
      map(([user, posts]) => ({ ...user, posts }))
    );
  }

  ngOnInit(): void {}
}
