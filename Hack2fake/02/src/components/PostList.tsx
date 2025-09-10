import type { Post } from "../types/Post";
import PostItem from "./PostItem";

type Props = {
  posts: Post[];
  toggleLike: (id: number) => void;
  openEdit: (post: Post) => void;
};

export default function PostList({ posts, toggleLike, openEdit }: Props) {
  return (
    <div>
      {posts.map((p) => (
        <PostItem
          key={p.id}
          post={p}
          toggleLike={toggleLike}
          openEdit={openEdit}
        />
      ))}
    </div>
  );
}
