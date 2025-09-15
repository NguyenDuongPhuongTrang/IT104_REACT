import { useState } from "react";
import type { Book } from "../types";

interface Props {
  book: Book;
  onUpdate: (book: Book) => void;
  onClose: () => void;
}

function EditBookModal({ book, onUpdate, onClose }: Props) {
  const [form, setForm] = useState<Book>({ ...book });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    onUpdate({
      ...form,
      year: Number(form.year),
      quantity: Number(form.quantity),
      price: Number(form.price),
      available: form.available === true,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow w-[500px]">
        <h2 className="text-xl font-bold mb-4">Chỉnh sửa sách</h2>

        <div className="space-y-3">
          <input
            name="title"
            placeholder="Tên sách"
            value={form.title}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
          <input
            name="author"
            placeholder="Tác giả"
            value={form.author}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
          <input
            name="category"
            placeholder="Thể loại"
            value={form.category}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
          <input
            type="number"
            name="year"
            placeholder="Năm xuất bản"
            value={form.year}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
          <input
            type="number"
            name="quantity"
            placeholder="Số lượng"
            value={form.quantity}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
          <input
            type="number"
            name="price"
            placeholder="Giá"
            value={form.price}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
          <input
            name="isbn"
            placeholder="ISBN"
            value={form.isbn}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
          <select
            name="available"
            value={form.available ? "true" : "false"}
            onChange={handleChange}
            className="w-full border rounded p-2"
          >
            <option value="true">Có sẵn</option>
            <option value="false">Đang mượn</option>
          </select>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={onClose}
            className="px-3 py-2 bg-gray-300 rounded"
          >
            Hủy
          </button>
          <button
            onClick={handleSubmit}
            className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditBookModal;
