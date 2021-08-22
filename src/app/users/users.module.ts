import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserDetailModule } from './pages/user-detail/user-detail.module';
import { UserListModule } from './pages/user-list/user-list.module';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [CommonModule, UsersRoutingModule, UserListModule, UserDetailModule],
})
export class UsersModule {}
