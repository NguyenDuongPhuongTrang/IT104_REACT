type Props = {
  filter: string;
  setFilter: (f: string) => void;
  openModal: () => void;
};

export default function Filter({ filter, setFilter, openModal }: Props) {
  return (
    <div className="bg-indigo-300 rounded-xl p-4 mb-4 flex justify-between items-center shadow">
      {/* Dropdown lọc */}
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="rounded-lg p-2 border"
      >
        <option value="all">Tất cả bài viết</option>
        <option value="liked">Bài viết yêu thích</option>
      </select>

      {/* Nút tạo bài viết */}
      <button
        onClick={openModal}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full"
      >
        Tạo bài viết
      </button>
    </div>
  );
}
