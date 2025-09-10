type Props = {
  postsCount: number;
  likesCount: number;
};

export default function Stats({ postsCount, likesCount }: Props) {
  return (
    <div className="flex gap-4 mb-4">
      {/* Tổng số bài viết */}
      <div className="bg-indigo-500 text-white rounded-xl p-4 flex-1 text-center shadow">
        <p className="text-2xl font-bold">{postsCount}</p>
        <p>Bài viết</p>
      </div>

      {/* Tổng số lượt thích */}
      <div className="bg-indigo-500 text-white rounded-xl p-4 flex-1 text-center shadow">
        <p className="text-2xl font-bold">{likesCount}</p>
        <p>Lượt thích</p>
      </div>
    </div>
  );
}
