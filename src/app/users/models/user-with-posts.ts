import { Post } from "../../post-api/post";
import { User } from "../../user-api/user";

export interface UserWithPosts extends User {
  posts: Post[];
}
