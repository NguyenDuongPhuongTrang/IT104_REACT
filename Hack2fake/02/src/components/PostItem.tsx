import type { Post } from "../types/Post";
import { Heart, Edit2 } from "lucide-react";

type Props = {
  post: Post;
  toggleLike: (id: number) => void;
  openEdit: (post: Post) => void;
};

export default function PostItem({ post, toggleLike, openEdit }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-4 flex justify-between items-start">
      <div>
        <h3 className="font-bold">{post.title}</h3>
        <p>{post.content}</p>

        {/* Like + Edit */}
        <div className="flex gap-3 mt-2">
          <button onClick={() => toggleLike(post.id)}>
            <Heart
              className={`${
                post.liked ? "text-red-500 fill-red-500" : "text-gray-400"
              }`}
            />
          </button>
          <button
            onClick={() => openEdit(post)}
            className="text-blue-500 hover:text-blue-700"
          >
            <Edit2 size={18} />
          </button>
        </div>
      </div>

      {/* Avatar placeholder */}
      <div className="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
        S
      </div>
    </div>
  );
}
