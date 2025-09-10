import { useState } from "react";
import Stats from "./components/Stats";
import Filter from "./components/Filter";
import PostList from "./components/PostList";
import PostModal from "./components/PostModal";
import type { Post } from "./types/Post";

export default function App() {
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, title: "Tiêu đề 1", content: "Nội dung 1", liked: true },
    { id: 2, title: "Tiêu đề 2", content: "Nội dung 2", liked: false },
  ]);

  const [filter, setFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  // Toggle like/unlike
  const toggleLike = (id: number) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, liked: !p.liked } : p))
    );
  };

  // Thêm bài viết
  const addPost = (title: string, content: string) => {
    setPosts((prev) => [
      ...prev,
      { id: prev.length + 1, title, content, liked: false },
    ]);
  };

  // Cập nhật hoặc xóa bài viết
  const updatePost = (id: number, title: string, content: string) => {
    if (title === "" && content === "") {
      // Xóa bài viết
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } else {
      // Cập nhật nội dung
      setPosts((prev) =>
        prev.map((p) => (p.id === id ? { ...p, title, content } : p))
      );
    }
  };

  // Lọc bài viết
  const filteredPosts =
    filter === "liked" ? posts.filter((p) => p.liked) : posts;

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-400 to-purple-400 p-6">
      <div className="max-w-lg mx-auto">
        {/* Stats */}
        <Stats
          postsCount={posts.length}
          likesCount={posts.filter((p) => p.liked).length}
        />

        {/* Bộ lọc + Nút tạo bài viết */}
        <Filter
          filter={filter}
          setFilter={setFilter}
          openModal={() => {
            setEditingPost(null);
            setIsModalOpen(true);
          }}
        />

        {/* Danh sách bài viết */}
        <PostList
          posts={filteredPosts}
          toggleLike={toggleLike}
          openEdit={(post) => {
            setEditingPost(post);
            setIsModalOpen(true);
          }}
        />

        {/* Modal tạo/sửa bài viết */}
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          addPost={addPost}
          updatePost={updatePost}
          editingPost={editingPost}
        />
      </div>
    </div>
  );
}
