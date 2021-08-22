import { PostComment } from '../../comment-api/comment';
import { Post } from '../../post-api/post';

export interface PostWithComments extends Post {
  comments: PostComment[];
}
