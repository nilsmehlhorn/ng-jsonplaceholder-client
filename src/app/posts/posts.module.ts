import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostDetailModule } from './pages/post-detail/post-detail.module';
import { PostListModule } from './pages/post-list/post-list.module';
import { PostsRoutingModule } from './posts-routing.module';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, PostsRoutingModule, PostListModule, PostDetailModule],
  providers: [PostService],
})
export class PostsModule {}
