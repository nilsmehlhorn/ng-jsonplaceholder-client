import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../user-api/user';
import { UserApiService } from '../../../user-api/user-api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private userApi: UserApiService) {
    this.users$ = this.userApi.all();
  }

  ngOnInit(): void {
  }
}
