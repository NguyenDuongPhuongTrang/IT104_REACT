import { useState, useEffect } from "react";
import type { Post } from "../types/Post";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  addPost: (title: string, content: string) => void;
  updatePost: (id: number, title: string, content: string) => void;
  editingPost?: Post | null;
};

export default function PostModal({
  isOpen,
  onClose,
  addPost,
  updatePost,
  editingPost,
}: Props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Nếu đang Edit → gán dữ liệu cũ vào form
  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setContent(editingPost.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [editingPost]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 w-96 shadow-lg">
        <h2 className="text-lg font-bold mb-4">
          {editingPost ? "Chỉnh sửa bài viết" : "Bài viết của bạn"}
        </h2>

        {/* Form nhập */}
        <input
          className="border w-full p-2 mb-2 rounded"
          placeholder="Tiêu đề*"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border w-full p-2 mb-4 rounded"
          placeholder="Nội dung*"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        {/* Nút điều khiển */}
        <div className="flex justify-between">
          {editingPost && (
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              onClick={() => {
                updatePost(editingPost.id, "", "");
                onClose();
              }}
            >
              Xóa
            </button>
          )}
          <div className="flex gap-2 ml-auto">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => {
                if (title && content) {
                  if (editingPost) {
                    updatePost(editingPost.id, title, content);
                  } else {
                    addPost(title, content);
                  }
                  onClose();
                }
              }}
            >
              {editingPost ? "Cập nhật" : "Đăng"}
            </button>
            <button
              className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
              onClick={onClose}
            >
              Hủy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
