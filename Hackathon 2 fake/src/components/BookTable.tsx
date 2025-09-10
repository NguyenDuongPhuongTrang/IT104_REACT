import type { Book } from "../types";

interface Props {
  books: Book[];
  onEdit: (book: Book) => void;
  onDelete: (id: number) => void;
}

function BookTable({ books, onEdit, onDelete }: Props) {
  if (books.length === 0) {
    return <p className="mt-4 text-center text-[white]">Không có sách nào.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border rounded-xl overflow-hidden">
        <thead className="bg-gradient-to-r from-[#6973DA] to-[#7451AB]">
          <tr>
            <th className="p-2">Tên sách</th>
            <th className="p-2">Tác giả</th>
            <th className="p-2">Thể loại</th>
            <th className="p-2">Năm</th>
            <th className="p-2">Số lượng</th>
            <th className="p-2">Giá</th>
            <th className="p-2">ISBN</th>
            <th className="p-2">Tình trạng</th>
            <th className="p-2">Hành động</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {books.map((b) => (
            <tr key={b.id} className="bg-[white] hover:bg-gray-100">
              <td className="p-2 border-t-1px">{b.title}</td>
              <td className="p-2 border-t-1px">{b.author}</td>
              <td className="p-2 border-t-1px">{b.category}</td>
              <td className="p-2 border-t-1px">{b.year}</td>
              <td className="p-2 border-t-1px">{b.quantity}</td>
              <td className="p-2 border-t-1px">{b.price}</td>
              <td className="p-2 border-t-1px">{b.isbn}</td>
              <td className="p-2 border-t-1px">
                {b.available ? (
                  <span className="text-green-600 font-medium">Có sẵn</span>
                ) : (
                  <span className="text-red-600 font-medium">Đang mượn</span>
                )}
              </td>
              <td className="p-2 flex gap-2 justify-center border-t-1px">
                <button
                  onClick={() => onEdit(b)}
                  className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 font-medium"
                >
                  Sửa
                </button>
                <button
                  onClick={() => onDelete(b.id)}
                  className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700 font-medium"
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookTable;
